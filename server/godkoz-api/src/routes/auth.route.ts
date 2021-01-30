import { Router } from 'express';
import passport from 'passport';
import * as Facebook from 'src/controllers/facebook.controller';
import * as Auth from 'src/controllers/auth.controller';
import isAuthenticated from 'src/utils/middlewares/isAuthenticated';

const router = Router();

router.get('/', isAuthenticated, Auth.GetUserProfile());

router.get(
  '/facebook',
  passport.authenticate('facebook', {
    scope: ['email', 'public_profile'],
    session: false,
  })
);

router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/',
    session: false,
  }),
  Facebook.FacebookCallback()
);

export default router;
