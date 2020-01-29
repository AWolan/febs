import { Moment } from 'moment';

export interface DynamicProps<T> {
  key?: string;
  data: T;
}

export interface DayData {
  date: Moment;
}

export interface WeekData {
  no: number;
  days: DayData[];
}

export interface CalendarData {
  no: number;
  weeks: WeekData[];
}