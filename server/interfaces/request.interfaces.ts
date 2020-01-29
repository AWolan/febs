import { Request } from 'express';

import { AssetTO } from '../../client/interfaces/asset/interfaces';
import { AssignmentTO } from '../../client/interfaces/assignment/interfaces';
import { Client, Project, Role } from '../../client/interfaces/structure/interfaces';
import { EventTO } from '../../client/interfaces/event/interfaces';
import { RequestTO } from '../../client/interfaces/request/interfaces';

export interface AssetRequest extends Request {
  asset: AssetTO;
}

export interface AssignmentRequest extends Request {
  assignment: AssignmentTO;
}

export interface ClientRequest extends Request {
  client: Client;
}

export interface EventRequest extends Request {
  event: EventTO;
}

export interface ProjectRequest extends Request {
  project: Project;
}

export interface RequestRequest extends Request {
  request: RequestTO;
}

export interface RoleRequest extends Request {
  role: Role;
}
