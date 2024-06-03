import { Router } from 'express';
import authRouter from './auth.route';
import workspaceRouter from './workspace.route';
import linkRouter from './link.route';
const router = Router();
router.use('/auth', authRouter);
router.use('/workspace', workspaceRouter);
router.use('/link', linkRouter);


export default router;