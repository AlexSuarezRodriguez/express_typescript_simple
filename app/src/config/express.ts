import { Application } from 'express';
import express from 'express';
import { corsMiddleware } from './middlewares/cors';

export default function configExpress(app: Application): void {
  // CORS Middleware
  app.use(corsMiddleware);

  // Parsers
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
}