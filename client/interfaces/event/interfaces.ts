import { Moment } from 'moment';

interface BaseEvent {
  id: string;
  name: string;
  description: string;
  startDate: any;
  endDate: any;
}

export interface Event extends BaseEvent {
  startDate: Moment;
  endDate: Moment;
}

export interface EventTO extends BaseEvent {
  startDate: string;
  endDate: string;
}
