import { SessionData } from 'express-session';

declare module 'express-session' {
  export interface SessionData {
    state: string; // or whatever type the 'state' is
  }
}