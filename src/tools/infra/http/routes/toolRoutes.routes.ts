import { Router } from "express";
import ToolsController from "../controller/ToolsController";

const toolRoutes = Router();
const toolsController = new ToolsController();

toolRoutes.post('/', toolsController.create)

toolRoutes.get('/', (request, response) => {
  const { tag } = request.query;
  if (tag) {
    return toolsController.search(request, response);
  } else {
    return toolsController.index(request, response);
  }
})

toolRoutes.get('/:id', toolsController.show);

toolRoutes.put('/:id', toolsController.update)

toolRoutes.delete('/:id', toolsController.delete)

export default toolRoutes;
