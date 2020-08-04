import Tool from '../infra/typeorm/entities/Tools';

export default interface IToolRepository {
  createTool(tool: Pick<Tool, 'description' | 'link' | 'title' | 'tags'>): Promise<Tool>;
  deleteTool(id: string): Promise<void>;
  findAllTools(): Promise<Tool[]>;
  search(tags: string): Promise<Tool[]>;
  update(tool: Pick<Tool, 'description' | 'link' | 'tags' | 'id'>): Promise<Tool>;
  findByTitle(title: string): Promise<Tool | undefined>;
  findById(id: string): Promise<Tool>;
};
