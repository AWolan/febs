import {
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import { EventTO } from '../../client/interfaces/event/interfaces';
import { EventRequest } from '../interfaces/request.interfaces';

const router = Router();

const events: EventTO[] = [
  {
    id: 'EVENT_00001',
    name: '',
    description: '',
    startDate: '',
    endDate: '',
  }
];

router.use((request: Request, response: Response, next: NextFunction) => {
  console.log(`[EVENT] ${request.originalUrl} ${request.method}`);
  next();
});

router.param('eventId', (request: EventRequest, response: Response, next: NextFunction) => {
  request.event = events.find((event: EventTO) => event.id === request.params.eventId);
  next();
});

router.route('/')
  .get((request: Request, response: Response) => {
    response.json(events);
  });
router.route('/:eventId')
  .get((request: EventRequest, response: Response) => {
    response.json(request.event);
  });

export default router;
