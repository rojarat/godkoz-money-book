import { Request, Response } from 'express';
import * as User from 'src/services/user.service';

export function LINECallback() {
  return async (
    req: Request,
    res: Response,
    next,
    token: {
      id_token: { sub: string; name: string; picture: string; email: string };
    }
  ) => {
    let user;
    try {
      user = await User.FindOrCreateUser({
        user_id: token.id_token.sub,
        display_name: token.id_token.name,
        picture_url: token.id_token.picture,
        email: token.id_token.email,
        provider_by: 'line',
      });
    } catch {
      return res
        .status(500)
        .json({ statusCode: '500', message: 'something went wrong' });
    }

    try {
      const token = await User.UpdateUserLoggedIn(user?._id);
      // todo set secure, sameSite, domain
      res.cookie('godkoz_id', token, {
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
