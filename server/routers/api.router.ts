import {
  Router,
} from 'express';

import assetRouter from './asset.router';
import assignmentRouter from './assignment.router';
import eventRouter from './event.router';
import requestRouter from './request.router';
import structureRouter from './structure.router';

const router = Router();

router.use('/asset', assetRouter);
router.use('/assignment', assignmentRouter);
router.use('/event', eventRouter);
router.use('/request', requestRouter);
router.use('/structure', structureRouter);

export default router;
