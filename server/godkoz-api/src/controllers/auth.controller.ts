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
