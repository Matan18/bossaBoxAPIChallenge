import IToolRepository from "../Repositories/IToolRepository";
import Tool from "../typeorm/entities/Tools";

export interface IServiceRequest {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export default class CreateToolService {
  constructor(
    private toolsRepository: IToolRepository
  ) { }
  public async execute(data: IServiceRequest): Promise<Tool> {
    const tool = await this.toolsRepository.createTool(data);

    return tool;

  }
} 
