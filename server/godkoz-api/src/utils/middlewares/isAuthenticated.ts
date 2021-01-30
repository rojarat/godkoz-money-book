import { Request, Response } from 'express';
import * as jwt from 'src/utils/jwt';
import * as User from 'src/services/user';
import { Cookie } from 'src/interfaces/Cookie';

import handleUnauthorized from './handleUnauthorized';

export default async (req: Request, res: Response, next) => {
  const cookies = req.cookies as Cookie;
  const godkozId = cookies?.godkoz_id;
  if (!godkozId) {
    return handleUnauthorized(req, res);
  }

  // verified jwt
  let decode;
  try {
    decode = jwt.verify(godkozId);
  } catch {
    return handleUnauthorized(req, res);
  }

  // query by jwt.sub == id
  let user;
  try {
    user = await User.FindUserById(decode?.sub);
    // check exist
    if (!user) {
      return handleUnauthorized(req, res);
    }
  } catch {
    return res
      .status(500)
      .json({ statusCode: '500', message: 'something went wrong' });
  }
  // check token exist same a value with User Collection,
  if (user?.auth_token?.token !== godkozId) {
    return handleUnauthorized(req, res);
  }
  // check expiresIn  > date.now()

  if (user?.auth_token?.expired_at < Date.now()) {
    return handleUnauthorized(req, res);
  }

  req.user = user;

  return next();
};
