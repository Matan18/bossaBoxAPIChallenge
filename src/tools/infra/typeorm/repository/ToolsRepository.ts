import { Repository, getRepository } from 'typeorm';
import IToolRepository from '../../../Repositories/IToolRepository';
import Tool from '../entities/Tools';

interface IToolRequest {
  description: string;
  link: string;
  tags: string[];
  title: string;
}
interface IToolUpdateRequest {
  id: string;
  description: string | undefined;
  link: string | undefined;
  tags: string[] | undefined;
  title: string | undefined;
}

export default class ToolsRepository implements IToolRepository {
  private ormRepository: Repository<Tool>;

  constructor() {
    this.ormRepository = getRepository(Tool);
  }

  public async createTool({
    title, link, description, tags,
  }: IToolRequest): Promise<Tool> {
    const tool = this.ormRepository.create();
    tool.title = title;
    tool.link = link;
    tool.description = description;
    tool.tags = tags;
    await this.ormRepository.save(tool);

    return tool;
  }

  public async deleteTool(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async index(): Promise<Tool[]> {
    const tools = await this.ormRepository.find();

    return tools;
  }

  public async search(tag: string): Promise<Tool[]> {
    console.log("Tag:", tag)
    const tools = await this.ormRepository.createQueryBuilder('tool')
      .where('(:tags) <@ (tool.tags)', { tags: [tag] }).getMany();

    return tools;
  }

  public async update({ id,
    link, description, tags,
  }: IToolUpdateRequest): Promise<Tool> {
    let tool = await this.ormRepository.findOne({ where: { id } });
    tool.link = link ? link : tool.link;
    tool.tags = tags ? tags : tool.tags;
    tool.description = description ? description : tool.description;

    tool = await this.ormRepository.save(tool);

    return tool;
  }
}
