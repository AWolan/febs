import {
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import { Project } from '../../client/interfaces/structure/interfaces';
import { ProjectRequest } from '../interfaces/request.interfaces';

const router = Router();

const projects: Project[] = [
  {
    id: 'PROJECT_00000',
    name: 'Leadership',
    short: 'LEAD',
    clientId: 'CLIENT_00000'
  },
  {
    id: 'PROJECT_00001',
    name: 'Manage Service',
    short: 'MS',
    clientId: 'CLIENT_00001'
  },
  {
    id: 'PRO_00002',
    name: 'Friends of Joules',
    short: 'FOJ',
    clientId: 'CLIENT_00001'
  },
  {
    id: 'PROJECT_00003',
    name: 'Evans B2C',
    short: '',
    clientId: 'CLIENT_00002'
  },
  {
    id: 'PROJECT_00004',
    name: 'Mamas B2C',
    short: '',
    clientId: 'CLIENT_00003'
  },
  {
    id: 'PROJECT_00005',
    name: 'Wacol B2C',
    short: '',
    clientId: 'CLIENT_00004'
  },
  {
    id: 'PROJECT_00006',
    name: 'Wacol B2B US',
    short: '',
    clientId: 'CLIENT_00004'
  },
  {
    id: 'PROJECT_00007',
    name: 'ghd B2C',
    short: '',
    clientId: 'CLIENT_00005'
  },
  {
    id: 'PROJECT_00008',
    name: 'Checkout',
    short: '',
    clientId: 'CLIENT_00006'
  },
  {
    id: 'PROJECT_00009',
    name: 'Consultancy',
    short: '',
    clientId: 'CLIENT_00007'
  }
];

router.use((request: Request, response: Response, next: NextFunction) => {
  console.log(`[PROJECT] ${request.originalUrl} ${request.method}`);
  next();
});

router.param('projectId', (request: ProjectRequest, response: Response, next: NextFunction) => {
  request.project = projects.find((project: Project) => project.id === request.params.projectId);
  next();
});

router.route('/')
  .get((request: Request, response: Response) => {
    response.json(projects);
  });
router.route('/:projectId')
  .get((request: ProjectRequest, response: Response) => {
    response.json(request.project);
  });

export default router;
