import { Request, Response } from 'express';
import { User } from 'src/interfaces/User';

export function GetUserProfile() {
  return async (req: Request, res: Response) => {
    const user = req.user as User;
    const profile = {
      display_name: user?.display_name,
      picture_url: user?.picture_url,
    };
    return res.json(profile);
  };
}

export function LogOut() {
  return async (req: Request, res: Response) => {
    res.cookie('godkoz_id', '', { maxAge: 0 });

    return res.json({
      success: true,
      message: 'logout success',
    });
  };
}
