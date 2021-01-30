import { Request, Response } from 'express';

function Validator(schema: any) {
  return async (req: Request, res: Response, next) => {
    try {
      console.log(req.body);
      const validatedData = await schema.validate(req.body);
      req.body = validatedData;
      next();
    } catch (e) {
      console.log(e);
      return res.json({ statusCode: '400', message: e?.message || '' });
    }
  };
}

export default Validator;
