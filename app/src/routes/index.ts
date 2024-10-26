// routes/index.ts
import { Application } from 'express';
import ping from '../api/ping';
import { ROUTE_API } from '../constants';

export default function routes(app: Application): void {
  app.use(ROUTE_API, ping);
}
