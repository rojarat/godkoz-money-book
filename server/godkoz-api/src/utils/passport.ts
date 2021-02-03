import { PassportStatic } from 'passport';
import LineStrategy from 'passport-line-auth/';
import {
  Strategy as FacebookStrategy,
  StrategyOption,
  Profile,
} from 'passport-facebook';
import {
  Strategy as GoogleStrategy,
  Profile as GoogleProfile
} from 'passport-google-oauth20';
import { FindOrCreateUser } from 'src/services/user';

const facebookConfig: StrategyOption = {
  clientID: process.env.FACEBOOK_CLIENT_ID || 'clientID',
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET || 'clientSecret',
  callbackURL: process.env.FACEBOOK_CALLBACK_URL || 'callbackURL',
  profileFields: ['id', 'displayName', 'photos', 'email'],
  enableProof: true,
};

const googleConfig = {
  clientID: process.env.GOOGLE_CLIENT_ID || 'clientID',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'clientSecret',
  callbackURL: process.env.GOOGLE_CALLBACK_URL || 'callbackURL'
};


export default (passport: PassportStatic) => {
  passport.use(
    new FacebookStrategy(
      facebookConfig,
      async (
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done
      ) => {
        try {
          const user = await FindOrCreateUser({
            user_id: profile._json.id,
            display_name: profile._json.name,
            picture_url: profile._json.picture.data.url,
            email: profile._json.email,
            provider_by: 'facebook',
          });

          return done(false, user);
        } catch (e) {
          console.log(e);
          return done('error');
        }
      }
    )
  );

  passport.use(
    new GoogleStrategy(
      googleConfig,
      async (
        accessToken: string,
        refreshToken: string,
        profile: GoogleProfile,
        done
      ) => {
        try {
          const user = await FindOrCreateUser({
            user_id: profile._json.sub,
            display_name: profile._json.name,
            picture_url: profile._json.picture,
            email: profile._json.email,
            provider_by: 'gmail',
          });

          return done('',user);
        } catch (e) {
          console.log(e);
          return done('error');
        }
      }
    )
  );

}