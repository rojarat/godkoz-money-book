import { Request, Response } from 'express';
import * as User from 'src/services/user';

export function FacebookCallback() {
  return async (req: Request, res: Response) => {
    const user = req.user as { _id: string };
    try {
      const token = await User.UpdateUserLoggedIn(user?._id);
      // todo set secure, sameSite, domain
      res.cookie('godkoz-id', token, {
        httpOnly: true,
      });
      return res.redirect('https://localhost:3000');
    } catch (e) {
      return res
        .status(500)
        .json({ statusCode: '500', message: 'something went wrong' });
    }
  };
}
