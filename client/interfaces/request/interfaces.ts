import { Status } from '../../enums/common.enums';
import { Moment } from 'moment';

interface RequestBase {
  id: string;
  name: string;
  describtion: string;
  project: string;
  startDate: any;
  endDate: any;
  status: any;
}

export interface Request extends RequestBase {
  startDate: Moment,
  endDate: Moment,
  status: Status,
}

export interface RequestTO extends RequestBase {
  startDate: string,
  endDate: string,
  status: string,
}
