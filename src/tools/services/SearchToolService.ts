import IToolRepository from "../Repositories/IToolRepository";
import Tool from "../infra/typeorm/entities/Tools";
import { inject, injectable } from "tsyringe";

@injectable()
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
