import Users from 'src/models/users';
import * as Jwt from 'src/utils/jwt';
import jwt from 'jsonwebtoken';

interface UserProfileLoggedIn {
  user_id: string;
  display_name: string;
  picture_url: string;
  email: string;
  provider_by: 'facebook' | 'google' | 'line';
}

export function FindOrCreateUser(payload: UserProfileLoggedIn) {
  return new Promise(async (resolve, reject) => {
    try {
      const found = await Users.findOne({ user_id: payload.user_id });
      if (found) {
        return resolve(found);
      }
      const newUser = await Users.create(payload);
      return resolve(newUser);
    } catch (e) {
      reject(e);
    }
  });
}

export function FindUserByUserId(user_id: string) {
  return Users.findOne({ user_id });
}

export function FindUserById(id: string) {
  return Users.findById(id);
}

export function UpdateUserLoggedIn(id: string): Promise<string> {
  return new Promise(async (resolve, reject) => {
    const token = Jwt.sign(id);
    const decoded = jwt.decode(token) as { exp: number };
    const expired_at = new Date(decoded.exp * 1000);
    const auth_token: { token: string; expired_at: Date } = {
      token,
      expired_at,
    };
    const DateNow = Date.now();
    try {
      await Users.findByIdAndUpdate(id, {
        auth_token,
        updated_at: DateNow,
        last_login_at: DateNow,
      });

      return resolve(token);
    } catch (e) {
      return reject(e);
    }
  });
}
