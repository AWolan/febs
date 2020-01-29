import {
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import { Client } from '../../client/interfaces/structure/interfaces';
import { ClientRequest } from '../interfaces/request.interfaces';

const router = Router();

const clients: Client[] = [
  {
    id: 'CLIENT_00000',
    name: 'Eclipse'
  },
  {
    id: 'CLIENT_00001',
    name: 'Joules'
  },
  {
    id: 'CLIENT_00002',
    name: 'Evans Cycles'
  },
  {
    id: 'CLIENT_00003',
    name: 'Mamas & Papas'
  },
  {
    id: 'CLIENT_00004',
    name: 'Wacol'
  },
  {
    id: 'CLIENT_00005',
    name: 'ghd'
  },
  {
    id: 'CLIENT_00006',
    name: 'Fruugo'
  },
  {
    id: 'CLIENT_00007',
    name: 'Bravissimo'
  }
];

router.use((request: Request, response: Response, next: NextFunction) => {
  console.log(`[CLIENT] ${request.originalUrl} ${request.method}`);
  next();
});

router.param('clientId', (request: ClientRequest, response: Response, next: NextFunction) => {
  request.client = clients.find((client: Client) => client.id === request.params.clientId);
  next();
});

router.route('/')
  .get((request: Request, response: Response) => {
    response.json(clients);
  });
router.route('/:clientId')
  .get((request: ClientRequest, response: Response) => {
    response.json(request.client);
  });

export default router;
