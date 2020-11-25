import IToolRepository from "../Repositories/IToolRepository";
import { inject, injectable } from "tsyringe";
import AppError from "../../shared/errors/AppError";
import { isUuid } from "uuidv4";
import { EntityNotFoundError } from "typeorm/error/EntityNotFoundError";
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
      if (error instanceof EntityNotFoundError) {
        if (isUuid(id)) {
          throw new AppError("We couldn't find this tool Id, probably already deleted", 404)
        }
      }
      if (error instanceof QueryFailedError) {
        throw new AppError("Invalid Id")
      }else{
        throw new AppError("Sorry, we had an unexpected error, please try again", 501)
      }
    }
    await this.toolsRepository.deleteTool(id);
    return;
  }
}
