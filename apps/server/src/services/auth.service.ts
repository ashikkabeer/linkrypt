/*
  * implement signup with email and password
  * implement login with email and password
  * implement logout
  * implement hashing of password
  * implement jwt 
*/
import * as dotenv from 'dotenv';
dotenv.config();
import { AuthUtils, JwtUtils } from '../utils';
import { User } from '../models/user.model';
import UserModel from '../models/user.model';
import { client } from '../utils/caching.utils';
export interface Token {
  token: string;
}

/*
  * sign up with email and password
  * @param {User} user
  * @return {Token} token
  * @throws {Error} invalid email
  * @throws {Error} invalid password
  * @throws {Error} email already exists
  * @throws {Error} invalid token
  * @throws {Error} invalid signature
  * TODO: implement email verification
*/
export const signUp = async (user: User): Promise<Token | Error >=> {
  try {
    const hashedPassword = await AuthUtils.hashPassword(user.password);
    const newUser: User = await UserModel.create({ ...user, password: hashedPassword });
    if (!newUser) {
      throw new Error('Invalid email or username, try another');
    }
    await client.set(user.username, user.email);
    const token = await JwtUtils.signToken({ id: user.id, email: newUser.email, username: newUser.username }, process.env.JWT_SECRET ?? 'secret-key');

    return { token };
  } catch (error) {
    console.error(error);
    return new Error('Invalid email or username, try another');
  }
};

export const signIn = async (email: string, password: string): Promise<string> => {
  const user = await UserModel.get(email);
  if (!user) {
    throw new Error('Invalid email');
  }
  const isValid = await AuthUtils.comparePassword(password, user.password);
  if (!isValid) {
    throw new Error('Invalid password');
  }
  await client.set(user.username, user.email);
  const token = await JwtUtils.signToken({ id: user.id, email: user.email, username: user.username }, process.env.JWT_SECRET ?? 'secret-key');
  return token;
};
// const value = await client.get('key');

/*
 * The list below quickly summarizes these steps:

  * Your application identifies the permissions it needs.
  * Your application redirects the user to Google along with the list of requested permissions.
  * The user decides whether to grant the permissions to your application.
  * Your application finds out what the user decided.
  * If the user granted the requested permissions, your application retrieves tokens needed to make API requests on the user's behalf. 
 */

/**
 * That request sets parameters that identify your application and define the permissions that the user will be asked to grant to your application
 * If you call the Google OAuth 2.0 endpoint directly, you'll generate a URL and set the parameters on that URL.
 * 
 */
