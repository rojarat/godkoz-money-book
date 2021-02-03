import jwt from 'jsonwebtoken';

export function sign(id: string) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return '';
  }
  // todo add audience
  return jwt.sign({ sub: id }, secret, { expiresIn: '10h' });
}

export function verify(token: string) {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return '';
  }

  return jwt.verify(token, secret);
}
