import { Router, Request, Response } from 'express';
import passport from 'passport';
import LINE from 'src/utils/line_login';
import * as Facebook from 'src/controllers/facebook.controller';
import * as Google from 'src/controllers/google.controller';
import { LINECallback } from 'src/controllers/line.controller';
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

router.get(
  '/google',
  passport.authenticate('google',{
    scope: ['profile', 'email'],
    session: false
  })
);

router.get(
  '/google/callback',
  passport.authenticate('google',{
    failureRedirect: '/',
    session: false,
  }),
  Google.GoogleCallback()
);
router.get('/line', LINE.auth());
router.get('/line/callback', LINE.callback(LINECallback()));

export default router;
