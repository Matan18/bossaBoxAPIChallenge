import IToolRepository from "../Repositories/IToolRepository";
import Tool from "../typeorm/entities/Tools";
import { inject, injectable } from "tsyringe";

@injectable()
export default class FindAllToolsService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolRepository
  ) { }
  public async execute(): Promise<Tool[]> {
    const tools = await this.toolsRepository.index();
    return tools;
  }
}