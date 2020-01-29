import * as moment from 'moment';

export const parseDate = (value: string) => value ? moment(value) : null;
