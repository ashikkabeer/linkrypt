/*
  * sign jwt token
  * @param {object} payload
  * @param {string} secret
  * @param {object} options
  * @return {string} token
  ---
  * validate jwt token
  * @param {string} token
  * @param {string} secret
  * @param {object} options
  * @return {object} payload
  * @throws {Error} invalid token
  * @throws {Error} invalid signature

*/

import jwt from 'jsonwebtoken';

//sign jwt token
export interface Payload {
  id: string;
  username: string;
  email: string;
}
export const signToken = async (payload:Payload, secret: string): Promise<string> => {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
};

//validate jwt token
export const validateToken = async (token: string, secret: string): Promise<Payload> => {
  try {
    return await jwt.verify(token, secret) as Payload;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error('Token expired');
    } else if (error instanceof jwt.JsonWebTokenError) {
      throw new Error('Invalid token');
    } else {
      throw error;
    }
  }
};