import { PassportStatic } from 'passport';
import {
  Strategy as FacebookStrategy,
  StrategyOption,
  Profile,
} from 'passport-facebook';
import { FindOrCreateUser } from 'src/services/user';

const facebookConfig: StrategyOption = {
  clientID: process.env.FACEBOOK_CLIENT_ID || '',
  clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
  callbackURL: process.env.FACEBOOK_CALLBACK_URL || '',
  profileFields: ['id', 'displayName', 'photos', 'email'],
  enableProof: true,
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
};
