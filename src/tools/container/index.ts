import { container } from "tsyringe";
import IToolRepository from "../Repositories/IToolRepository";
import ToolsRepository from "../infra/typeorm/repository/ToolsRepository";

container.registerSingleton<IToolRepository>("ToolsRepository", ToolsRepository);
