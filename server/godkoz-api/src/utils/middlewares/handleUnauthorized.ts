import { Request, Response } from 'express';

export default (req: Request, res: Response) => {
  res.cookie('godkoz_id', '', { maxAge: 0 });
  return res.status(401).json({ statusCode: 401, message: 'unauthorized' });
};
