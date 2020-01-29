import {
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import { Role } from '../../client/interfaces/structure/interfaces';
import { RoleRequest } from '../interfaces/request.interfaces';

const router = Router();

const roles: Role[] = [
  {
    id: 'ROLE_00000',
    name: 'Front End Lead',
    short: 'FEL'
  },
  {
    id: 'ROLE_00001',
    name: 'Frontend Developer',
    short: 'FE'
  },
  {
    id: 'ROLE_00002',
    name: 'Tech Lead',
    short: 'TL'
  }
];

router.use((request: Request, response: Response, next: NextFunction) => {
  console.log(`[ROLE] ${request.originalUrl} ${request.method}`);
  next();
});

router.param('roleId', (request: RoleRequest, response: Response, next: NextFunction) => {
  request.role = roles.find((role: Role) => role.id === request.params.roleId);
  next();
});

router.route('/')
  .get((request: Request, response: Response) => {
    response.json(roles);
  });
router.route('/:roleId')
  .get((request: RoleRequest, response: Response) => {
    response.json(request.role);
  });

export default router;
