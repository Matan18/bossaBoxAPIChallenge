import express from "express";
import cors from "cors";
import toolRoutes from "./toolRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/tools', toolRoutes);

export default app;
