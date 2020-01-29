import axios, { AxiosResponse } from 'axios';

import {
  AssignmentTO,
  Assignment,
} from '../interfaces/assignment/interfaces';
import { Status } from '../enums/common.enums';
import { parseDate } from '../utils/date.utils';

export const fetchAllAssignments = () =>
  axios.get('/api/assignment')
    .then((response: AxiosResponse<AssignmentTO[]>): Assignment[] => response.data.map((assignment: AssignmentTO) => ({
      ...assignment,
      startDate: parseDate(assignment.startDate),
      endDate: parseDate(assignment.endDate),
      status: Status[assignment.status],
    })));
