import Tool from '../typeorm/entities/Tools';

export default interface IToolRepository {
  createTool(tool: Pick<Tool, 'description' | 'link' | 'title' | 'tags'>): Promise<Tool>;
  deleteTool(id: string): Promise<void>;
  index(): Promise<Tool[]>;
  search(tags: string): Promise<Tool[]>;
  update(toolId: string, tool: Pick<Tool, 'description' | 'link' | 'title' | 'tags'>): Promise<Tool>;
};
