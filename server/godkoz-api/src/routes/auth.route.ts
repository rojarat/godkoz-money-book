import { Router } from 'express';
import passport from 'passport';
import * as Facebook from 'src/controllers/facebook.controller';

const router = Router();

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
