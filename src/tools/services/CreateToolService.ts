import IToolRepository from "../Repositories/IToolRepository";
import { inject } from "tsyringe";
import Tool from "../typeorm/entities/Tools";

export interface IServiceRequest {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export default class CreateToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolRepository
  ) { }
  public async execute(data: IServiceRequest): Promise<Tool> {
    const tool = await this.toolsRepository.createTool(data);

    return tool;

  }
} 
