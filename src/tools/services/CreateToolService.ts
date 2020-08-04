import IToolRepository from "../Repositories/IToolRepository";
import { inject, injectable } from "tsyringe";
import Tool from "../infra/typeorm/entities/Tools";

export interface IServiceRequest {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

@injectable()
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
