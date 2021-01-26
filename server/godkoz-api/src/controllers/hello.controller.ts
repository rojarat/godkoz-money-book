import { Request, Response } from 'express';

export function Hello() {
  return (req: Request, res: Response) => {
    console.log('here');
    res.send('Hello');
  };
}

export function HelloWithName() {
  return (req: Request, res: Response) => {
    const params = req?.params as { name: string };
    res.send(`Hello, ${params?.name}`);
  };
}
