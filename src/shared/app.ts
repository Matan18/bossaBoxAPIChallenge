import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import 'express-async-errors';

import createConnection from "./infra/typeorm/connection";
import toolRoutes from "../tools/infra/http/routes/toolRoutes.routes";
import "./container"
import AppError from "./errors/AppError";

createConnection();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/tools', toolRoutes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  }
  console.log(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})


export default app;
