import { Request, Response } from 'express';
import { signUp, signIn } from '../services/auth.service';

export default {
  signUp: async (req: Request, res: Response) => {
    const token = await signUp(req.body);
    console.log('token: ', token)
    res.json({ access_token: token });
  },

  signIn: async (req: Request, res: Response) => {
    const token = await signIn(req.body.email, req.body.password);
    res.status(200).json({ access_token: token });
  },

};

