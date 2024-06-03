// write authorization middleware here

import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).send('Unauthorized');
  }
  try {
    // const secret = process.env.JWT_SECRET;
    const secret = 'secret-key';
    const payload = jwt.verify(token, secret);
    res.locals.payload = payload;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).send('Token expired');
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).send('Invalid token');
    } else {
      return res.status(401).send('Unauthorized');
    }
  }
};