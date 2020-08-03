import IToolRepository from "../Repositories/IToolRepository";
import Tool from "../typeorm/entities/Tools";
import { inject } from "tsyringe";

export default class SearchToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolRepository
  ) { }
  public async execute(tags: string): Promise<Tool[]> {
    const tools = await this.toolsRepository.search(tags);
    return tools;
  }
}
