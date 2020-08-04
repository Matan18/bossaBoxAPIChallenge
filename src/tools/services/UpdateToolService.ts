import IToolRepository from "../Repositories/IToolRepository";
import Tool from "../infra/typeorm/entities/Tools";
import { inject, injectable } from "tsyringe";

export interface IServiceRequest {
  id: string;
  description: string;
  link: string;
  tags: string[];
}

@injectable()
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
