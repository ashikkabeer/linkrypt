import { Router } from 'express';
import workspaceController from '../controllers/workspace.controller';
const router = Router();

import { authMiddleware } from '../middlewares/auth.middleware';
router.use(authMiddleware);

router.post('/create', workspaceController.create);
router.get('/read', workspaceController.getInfo);
router.put('/update', workspaceController.update);
router.delete('/delete', workspaceController.delete);
router.put('/addUser', workspaceController.addUser);
export default router;