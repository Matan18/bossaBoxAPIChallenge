import IToolRepository from "../Repositories/IToolRepository";
import Tool from "../typeorm/entities/Tools";
import { inject } from "tsyringe";

export interface IServiceRequest {
  id: string;
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export default class UpdateToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolRepository
  ) { }
  public async execute(data: IServiceRequest): Promise<Tool> {
    const tool = await this.toolsRepository.update(data);
    return tool;
  }
}
