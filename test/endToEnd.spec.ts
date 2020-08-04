import supertest from "supertest";
import app from "../src/shared/app";
import createConnection from "../src/shared/typeorm/connection";
import { Connection, getConnection, LessThanOrEqual } from "typeorm";

let connection: Connection;

const tool = {
  title: "notion",
  link: "https://github.com/typicode/hotel",
  description: "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
  tags: ["test", "nodeTest"]
}

describe("Test on requests", () => {
  beforeAll(async () => {
    connection = await createConnection('test-connection')

    await connection.query('DROP TABLE IF EXISTS tools');
    await connection.query('DROP TABLE IF EXISTS migrations');

    await connection.runMigrations();
  })

  beforeEach(async () => {
    await connection.query('DELETE FROM tools');
  })

  afterAll(async () => {
    const mainConnection = getConnection();

    await connection.close()
    await mainConnection.close();
  })

  it('should be able to create a tool', async () => {
    const response = await supertest(app)
      .post('/tools')
      .send(tool)
      .set("Accept", 'application/json')
    expect(response.status).toEqual(201);
    expect(response.body).toEqual((expect.objectContaining({
      title: 'notion'
    })))
    expect(response.body).toEqual(expect.objectContaining(tool))
  })

  it('should not be able to create two tools with the same title', async () => {
    await supertest(app)
      .post('/tools')
      .send(tool)
      .set("Accept", 'application/json');

    const response = await supertest(app)
      .post('/tools')
      .send(tool)
      .set("Accept", 'application/json')
    expect(response.status).toEqual(409)
  });

  it('should be able to list all tools', async () => {
    await supertest(app)
      .post('/tools')
      .send({
        title: "json-server",
        link: "https://github.com/typicode/json-server",
        description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
        tags: [
          "api",
          "json",
          "schema",
          "node",
          "github",
          "rest"
        ]
      })
      .set("Accept", 'application/json')
    await supertest(app)
      .post('/tools')
      .send({
        title: "fastify",
        link: "https://www.fastify.io/",
        description: "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
        tags: [
          "web",
          "framework",
          "node",
          "http2",
          "https",
          "localhost"
        ]
      })
      .set("Accept", 'application/json')
    await supertest(app)
      .post('/tools')
      .send({
        "title": "hotel",
        "link": "https://github.com/typicode/hotel",
        "description": "Local app manager. Start apps within your browser, developer tool with local .localhost domain and https out of the box.",
        "tags": ["node", "organizing", "webapps", "domain", "developer", "https", "proxy"]
      })
      .set("Accept", 'application/json')
    const response = await supertest(app)
      .get('/tools')
      .set("Accept", 'application/json')

    expect(response.body).toEqual(expect.arrayContaining([
      expect.objectContaining({
        title: 'json-server'
      }), expect.objectContaining({
        title: 'fastify'
      }), expect.objectContaining({
        title: 'hotel'
      })]))
  });

  it('should be able to delete a tool by id', async () => {
    const res = await supertest(app)
      .post('/tools')
      .send(tool)
      .set("Accept", 'application/json')
    const { id } = res.body;

    const response = await supertest(app)
      .delete(`/tools/${id}`)
      .send(tool)
      .set("Accept", 'application/json')

    expect(response.status).toEqual(204);
  });

  it('should not be able to delete a tool with unexisting id', async () => {

    const response = await supertest(app)
      .delete(`/tools/${"unexisting-id"}`)
      .set("Accept", 'application/json')

    expect(response.status).toEqual(404);
  });

  it('should be able to update a tool by id', async () => {
    const firstResponse = await supertest(app)
      .post('/tools')
      .send(tool)
      .set("Accept", 'application/json');

    const { id } = firstResponse.body;

    const response = await supertest(app)
      .put(`/tools/${id}`)
      .send({
        link: "https://notion.so",
        description: "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized.",
        tags: ["organization",
          "planning",
          "collaboration",
          "writing",
          "calendar"]
      })
      .set("Accept", 'application/json');
    expect(response.body).toEqual((expect.objectContaining({
      link: 'https://notion.so',
      tags: expect.arrayContaining(["organization", "planning",
        "collaboration"])
    })))
    expect(response.body).toHaveProperty('description');
  })
})
