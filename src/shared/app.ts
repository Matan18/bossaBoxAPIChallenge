import express from "express";
import cors from "cors";
import "./typeorm/connection";
import toolRoutes from "../tools/http/routes/toolRoutes.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/tools', toolRoutes);

export default app;
