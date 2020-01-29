import axios, { AxiosResponse } from 'axios';

import {
  Asset,
  AssetTO,
} from '../interfaces/asset/interfaces';
import { parseDate } from '../utils/date.utils';

export const fetchAllAssets = () =>
  axios.get('/api/asset')
    .then((response: AxiosResponse<AssetTO[]>): Asset[] => response.data.map((asset: AssetTO) => ({
      ...asset,
      startDate: parseDate(asset.startDate),
      endDate: parseDate(asset.endDate),
    })));
