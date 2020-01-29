import {
  Router,
} from 'express';

import clientRouter from './client.router';
import projectRouter from './project.router';
import roleRouter from './role.router';

const router = Router();

router.use('/client', clientRouter);
router.use('/project', projectRouter);
router.use('/role', roleRouter);

export default router;
