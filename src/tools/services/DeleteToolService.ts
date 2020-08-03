import IToolRepository from "../Repositories/IToolRepository";
import { inject } from "tsyringe";

export default class DeleteToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolRepository
  ) { }
  public async execute(id: string): Promise<void> {
    await this.toolsRepository.deleteTool(id);
  }
}
