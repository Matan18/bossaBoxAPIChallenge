import { Router } from "express";
import ToolsController from "../controller/ToolsController";

const toolRoutes = Router();
const toolsController = new ToolsController();

toolRoutes.post('/', toolsController.create)

toolRoutes.get('/', toolsController.index)

toolRoutes.put('/:id', toolsController.update)

toolRoutes.delete('/:id', toolsController.delete)

export default toolRoutes;
