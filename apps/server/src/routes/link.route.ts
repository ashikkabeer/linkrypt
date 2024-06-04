import { Router } from 'express';
import linkController from '../controllers/link.controller';
const router = Router();
import { authMiddleware } from '../middlewares/auth.middleware';
router.use(authMiddleware);

router.post('/create/:id', linkController.create);
router.put('/update/:id', linkController.update);
router.delete('/delete/:id', linkController.delete);
router.get('/read/:id', linkController.get);


export default router;