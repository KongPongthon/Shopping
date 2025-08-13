import { Router } from 'express';
const router = Router();
import Admin from './Admin/admin.routes';
import User from './User/user.routes';
router.use('/admin', Admin);
router.use('/user', User);

export default router;
