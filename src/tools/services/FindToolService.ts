import IToolRepository from "../Repositories/IToolRepository";
import Tool from "../infra/typeorm/entities/Tools";
import { inject, injectable } from "tsyringe";
import AppError from "../../shared/errors/AppError";

@injectable()
export default class FindToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolRepository
  ) { }
  public async execute(id: string): Promise<Tool> {
    try {
      const tool = await this.toolsRepository.findById(id);
      return tool;
    } catch (error) {
      throw new AppError('Invalid Id', 404);
    }
  }
}
