import { Router } from "express";
import ToolsRepository from "./tools/typeorm/repository/ToolsRepository";

const toolRoutes = Router();
const toolsRepository = new ToolsRepository();

toolRoutes.post('/', async (request, response) => {
  const { title, link, description, tags } = request.body;
  const tool = await toolsRepository.createTool({ title, link, description, tags })

  return response.json(tool);
})

toolRoutes.get('/', async (request, response) => {
  const { tag } = request.query
  if (tag) {
    const tools = await toolsRepository.search(String(tag))
    return response.json(tools);

  }
  const tools = await toolsRepository.index();
  return response.json(tools);
})

toolRoutes.put('/:id', async (request, response) => {
  const { id } = request.params;
  const { title, link, description, tags } = request.body;

  const tool = await toolsRepository.update(id, { title, link, description, tags });

  return response.json(tool)
})

toolRoutes.delete('/:id', async (request, response) => {
  const { id } = request.params;

  await toolsRepository.deleteTool(id);

  return response.status(204).json();
})

export default toolRoutes;
