import axios, { AxiosResponse } from 'axios';
import * as moment from 'moment';

import { RequestTO, Request } from '../interfaces/request/interfaces';
import { Status } from '../enums/common.enums';

export const fetchAllRequests = () =>
  axios.get('/api/request')
    .then((response: AxiosResponse<RequestTO[]>): Request[] => response.data.map((request: RequestTO) => ({
      ...request,
      startDate: moment(request.startDate),
      endDate: moment(request.endDate),
      status: Status[request.status],
    })));;
