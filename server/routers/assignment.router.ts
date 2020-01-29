import {
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import { AssignmentTO } from '../../client/interfaces/assignment/interfaces';
import { AssignmentRequest } from '../interfaces/request.interfaces';

const router = Router();

const assignments: AssignmentTO[] = [
  {
    id: 'ASSIGNMENT_00001',
    project: 'PROJECT_00002',
    asset: 'ASSET_00002',
    role: 'ROLE_00001',
    startDate: '2018-12-01',
    endDate: '2019-05-31',
    commitment: 100,
    status: 'APPROVED'
  },
  {
    id: 'ASSIGNMENT_00002',
    project: 'PROJECT_00002',
    asset: 'ASSET_00002',
    role: 'ROLE_00001',
    startDate: '2019-06-01',
    endDate: null,
    commitment: 50,
    status: 'APPROVED'
  },
  {
    id: 'ASSIGNMENT_00003',
    project: 'PROJECT_00000',
    asset: 'ASSET_00002',
    role: 'ROLE_00000',
    startDate: '2019-06-01',
    endDate: '2019-07-07',
    commitment: 50,
    status: 'APPROVED'
  },
  {
    id: 'ASSIGNMENT_00004',
    project: 'PROJECT_00000',
    asset: 'ASSET_00002',
    role: 'ROLE_00000',
    startDate: '2019-06-01',
    endDate: null,
    commitment: 30,
    status: 'APPROVED'
  },
  {
    id: 'ASSIGNMENT_00005',
    project: 'PROJECT_00004',
    asset: 'ASSET_00002',
    role: 'ROLE_00001',
    startDate: '2019-08-08',
    endDate: null,
    commitment: 30,
    status: 'APPROVED'
  },
  {
    id: 'ASSIGNMENT_00002',
    project: 'PROJECT_00002',
    asset: 'ASSET_00002',
    role: 'ROLE_00001',
    startDate: '2019-06-01',
    endDate: null,
    commitment: 50,
    status: 'APPROVED'
  }
];

router.use((request: Request, response: Response, next: NextFunction) => {
  console.log(`[ASSIGNMENT] ${request.originalUrl} ${request.method}`);
  next();
});

router.param('assignmentId', (request: AssignmentRequest, response: Response, next: NextFunction) => {
  request.assignment = assignments.find((assignment: AssignmentTO) => assignment.id === request.params.assignmentId);
  next();
});

router.route('/')
  .get((request: Request, response: Response) => {
    response.json(assignments);
  });
router.route('/:assignmentId')
  .get((request: AssignmentRequest, response: Response) => {
    response.json(request.assignment);
  });

export default router;
