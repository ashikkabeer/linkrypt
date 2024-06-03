import { Router } from 'express';
import linkController from '../controllers/link.controller';
const router = Router();

router.post('/create', linkController.create);
router.put('/update/:id', linkController.update);
router.delete('/delete/:id', linkController.delete);
router.get('/read/:id', linkController.get);


export default router;