import { container } from "tsyringe";
import { Request, Response } from "express";

import ToolsRepository from "../../typeorm/repository/ToolsRepository";

import CreateToolService from "../../services/CreateToolService";
import SearchToolService from "../../services/SearchToolService";
import FindAllToolsService from "../../services/FindAllToolsService";
import UpdateToolService from "../../services/UpdateToolService";

export default class ToolsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, link, description, tags } = request.body;
    const createTool = container.resolve(CreateToolService)

    const tool = await createTool.execute({ title, link, description, tags })

    return response.json(tool);
  }
  public async index(request: Request, response: Response): Promise<Response> {
    const { tag } = request.query
    if (tag) {
      const searchTools = container.resolve(SearchToolService)
      const tools = await searchTools.execute(String(tag))
      return response.json(tools);

    }
    const findAllTools = container.resolve(FindAllToolsService)
    const tools = await findAllTools.execute();
    return response.json(tools)
  }
  public async search(request: Request, response: Response): Promise<Response> {
    // For now, its not been used
    return response.json();
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const { title, link, description, tags } = request.body;
    const updateTool = container.resolve(UpdateToolService);

    const tool = await updateTool.execute({ id, title, link, description, tags });

    return response.json(tool)
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const toolsRepository = new ToolsRepository();


    await toolsRepository.deleteTool(id);

    return response.status(204).json();
  }
}
