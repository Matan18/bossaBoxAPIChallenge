import express from "express";
import cors from "cors";
import createConnection from "./infra/typeorm/connection";
import toolRoutes from "../tools/infra/http/routes/toolRoutes.routes";
import "./container"

createConnection();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/tools', toolRoutes);

export default app;
