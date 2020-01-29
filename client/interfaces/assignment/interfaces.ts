import { Status } from '../../enums/common.enums';
import { Moment } from 'moment';

interface AssignmentBase {
  id: string;
  project: string;
  asset: string;
  role: string;
  startDate: any;
  endDate: any;
  commitment: number;
  status: any;
}

export interface Assignment extends AssignmentBase {
  startDate: Moment,
  endDate: Moment,
  status: Status,
}

export interface AssignmentTO extends AssignmentBase {
  startDate: string,
  endDate: string,
  status: string,
}
