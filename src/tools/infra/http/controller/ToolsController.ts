import { container } from "tsyringe";
import { Request, Response } from "express";

import CreateToolService from "../../../services/CreateToolService";
import SearchToolsService from "../../../services/SearchToolsService";
import FindAllToolsService from "../../../services/FindAllToolsService";
import UpdateToolService from "../../../services/UpdateToolService";
import DeleteToolService from "../../../services/DeleteToolService";
import FindToolService from "../../../services/FindToolService";

export default class ToolsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, link, description, tags } = request.body;

    const createTool = container.resolve(CreateToolService)
    const tool = await createTool.execute({ title, link, description, tags })

    return response.status(201).json(tool);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findTool = container.resolve(FindToolService);
    const tool = await findTool.execute(id);

    return response.json(tool);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    
    const findAllTools = container.resolve(FindAllToolsService)
    const tools = await findAllTools.execute();

    return response.json(tools)
  }

  public async search(request: Request, response: Response): Promise<Response> {
    const { tag } = request.query

    const searchTools = container.resolve(SearchToolsService)
    const tools = await searchTools.execute(String(tag))

    return response.json(tools);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { link, description, tags } = request.body;

    const updateTool = container.resolve(UpdateToolService);
    const tool = await updateTool.execute({ id, link, description, tags });

    return response.json(tool)
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTool = container.resolve(DeleteToolService)
    await deleteTool.execute(id);

    return response.status(204).json();
  }
}
