import * as express from 'express';
import { Request, Response } from 'express';
import * as path from 'path';

import apiRouter from './routers/api.router';

const app = express();

const port = 3000;

app.use(express.static(path.resolve('dist/client')));

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log('FaaS is ready to work!');
});
