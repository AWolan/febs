import {
  Request,
  Response,
  NextFunction,
  Router,
} from 'express';
import { AssetTO } from '../../client/interfaces/asset/interfaces';
import { AssetRequest } from '../interfaces/request.interfaces';

const router = Router();

const assets: AssetTO[] = [
  {
    id: 'ASSET_00001',
    name: 'Michał',
    surname: 'Boniarczyk',
    startDate: '2015-10-01',
    endDate: null,
    skills: []
  },
  {
    id: 'ASSET_00002',
    name: 'Adam',
    surname: 'Wolan',
    startDate: '2017-09-01',
    endDate: null,
    skills: []
  },
  {
    id: 'ASSET_00002',
    name: 'Paweł',
    surname: 'Kowalewski',
    startDate: '2018-08-01',
    endDate: null,
    skills: []
  },
  {
    id: 'ASSET_00004',
    name: 'Maciej',
    surname: 'Sasiński',
    startDate: '2018-07-01',
    endDate: null,
    skills: []
  },
  {
    id: 'ASSET_00005',
    name: 'Mateusz',
    surname: 'Kuriata',
    startDate: '2019-09-09',
    endDate: null,
    skills: []
  },
  {
    id: 'ASSET_00006',
    name: 'Tomasz',
    surname: 'Hałaczkiewicz',
    startDate: '2019-10-01',
    endDate: null,
    skills: []
  },
  {
    id: 'ASSET_00007',
    name: 'Szymon',
    surname: 'Wiszczuk',
    startDate: '2019-10-01',
    endDate: null,
    skills: []
  }
];

router.use((request: Request, response: Response, next: NextFunction) => {
  console.log(`[ASSET] ${request.originalUrl} ${request.method}`);
  next();
});

router.param('assetId', (request: AssetRequest, response: Response, next: NextFunction) => {
  request.asset = assets.find((asset: AssetTO) => asset.id === request.params.assetId);
  next();
});

router.route('/')
  .get((request: Request, response: Response) => {
    response.json(assets);
  });
router.route('/:assetId')
  .get((request: AssetRequest, response: Response) => {
    response.json(request.asset);
  });

export default router;
