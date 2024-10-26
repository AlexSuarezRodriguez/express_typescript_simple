// index.ts
import express, { Application } from 'express';
import * as dotenv from 'dotenv';
import path from 'path';

// Local File Imports
import configExpress from './config/express';
import routes from './routes';

// Setting Environment Variables
dotenv.config();

const app: Application = express();

// Express and route settings
configExpress(app);
routes(app);

// Static File Configuration
app.use('/public', express.static(path.join(__dirname, 'public')));

export default app;