import {
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import { RequestTO } from '../../client/interfaces/request/interfaces';
import { RequestRequest } from '../interfaces/request.interfaces';

const router = Router();

const requests: RequestTO[] = [
  {
    id: 'REQUEST_00001',
    name: 'MS Frontend changes',
    describtion: '',
    project: 'PROJECT_00001',
    startDate: '2019-07-08',
    endDate: '2019-08-30',
    status: 'ASSIGNED'
  },
  {
    id: 'REQUEST_00002',
    name: 'Fruugo Frontend help',
    describtion: '',
    project: 'PROJECT_00008',
    startDate: '2019-07-08',
    endDate: '2019-09-30',
    status: 'ASSIGNED'
  },
  {
    id: 'REQUEST_00003',
    name: 'MS Frontend needed',
    describtion: '',
    project: 'CLI_00003',
    startDate: '2019-07-08',
    endDate: '2019-08-30',
    status: 'ASSIGNED'
  }
];

router.use((request: Request, response: Response, next: NextFunction) => {
  console.log(`[REQUEST] ${request.originalUrl} ${request.method}`);
  next();
});

router.param('requestId', (request: RequestRequest, response: Response, next: NextFunction) => {
  request.request = requests.find((requestTo: RequestTO) => requestTo.id === request.params.requestId);
  next();
});

router.route('/')
  .get((request: Request, response: Response) => {
    response.json(requests);
  });
router.route('/:requestId')
  .get((request: RequestRequest, response: Response) => {
    response.json(request.request);
  });

export default router;
