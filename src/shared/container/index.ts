import { container } from "tsyringe";
import IToolRepository from "../../tools/Repositories/IToolRepository";
import ToolsRepository from "../../tools/typeorm/repository/ToolsRepository";

container.registerSingleton<IToolRepository>("ToolsRepository", ToolsRepository);