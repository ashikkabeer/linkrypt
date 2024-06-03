/*
  * Hash Password
  * @param password
  * @returns hashed password
  * @description hash password using bcrypt
  * @function hashPassword
  * 
  * Compare Password
  * @param password
  * @param hashedPassword
  * @returns boolean
  * @description compare password with hashed password
  * @function comparePassword
  * @example comparePassword('password', 'hashedPassword')
  * 
*/ 

import bcrypt from 'bcrypt';

export const hashPassword = async (password: string): Promise<string> => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  return bcrypt.compare(password, hashedPassword);
};