import connect from "./connection";
import Tool from "../tools/typeorm/entities/Tools";

const toolSample = {
  title: 'hotel',
  link: 'https://github.com/typicode/hotel',
  description: "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
  tags: ["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
}

connect.then(async connection => {
  const toolRepository = connection.getRepository(Tool);

  const tool = toolRepository.create();
  tool.title = toolSample.title
  tool.link = toolSample.link
  tool.description = toolSample.description
  tool.tags = toolSample.tags
  await toolRepository.save(tool);

})
