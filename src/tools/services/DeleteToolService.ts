import IToolRepository from "../Repositories/IToolRepository";
import { inject, injectable } from "tsyringe";
import AppError from "../../shared/errors/AppError";
import { QueryFailedError } from "typeorm";

@injectable()
export default class DeleteToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolRepository
  ) { }
  public async execute(id: string): Promise<void> {
    try {
      await this.toolsRepository.findById(id);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new AppError("Invalid Id", 404)
      }
    }
    await this.toolsRepository.deleteTool(id);
    return;
  }
}
