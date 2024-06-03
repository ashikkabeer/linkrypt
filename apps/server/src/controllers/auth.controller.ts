import { Request, Response } from 'express';
import { signUp, signIn } from '../services/auth.service';

// import { google } from 'googleapis';
// import crypto from 'crypto';
// import fs from 'fs';
// const oauthCredentials = JSON.parse(fs.readFileSync('client_secret_729179796650-a1gkid2rj2t8igsd3hni4isradf40b4h.apps.googleusercontent.com.json').toString());
/**
 * To use OAuth2 authentication, we need access to a CLIENT_ID, CLIENT_SECRET, AND REDIRECT_URI
 * from the client_secret.json file. To get these credentials for your application, visit
 * https://console.cloud.google.com/apis/credentials.
 */
// const oauth2Client = new google.auth.OAuth2(
//   oauthCredentials.web.client_id,
//   oauthCredentials.web.client_secret,
//   oauthCredentials.web.redirect_uris[0],
// );

// // Access scopes for read-only Drive activity.
// const scopes = [
//   'https://www.googleapis.com/auth/drive.metadata.readonly',
// ];

export default {
  signUp: async (req: Request, res: Response) => {
    const token = await signUp(req.body);
    res.json({ access_token: token });
  },

  signIn: async (req: Request, res: Response) => {
    const token = await signIn(req.body.email, req.body.password);
    res.status(200).json({ access_token: token });
  },

  // googleOAuth: async (req: Request, res: Response) => {

  //   // Generate a secure random state value.
  //   const state = crypto.randomBytes(32).toString('hex');

  //   // Store state in the session
  //   req.session.state = state;

  //   // Generate a url that asks permissions for the Drive activity scope
  //   const authorizationUrl = oauth2Client.generateAuthUrl({
  //     // 'online' (default) or 'offline' (gets refresh_token)
  //     access_type: 'offline',
  //     /** Pass in the scopes array defined above.
  //   //   * Alternatively, if only one scope is needed, you can pass a scope URL as a string */
  //     scope: scopes,
  //     // Enable incremental authorization. Recommended as a best practice.
  //     include_granted_scopes: true,
  //     // Include the state parameter to reduce the risk of CSRF attacks.
  //     state: state,
  //   });
  //   res.redirect(authorizationUrl);

  // },

};

