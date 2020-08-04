# BossaBox API Challenge

[Português](https://github.com/Matan18/bossaBoxAPIChallenge/blob/master/README.pt.md)
  - [BossaBox API Challenge](#bossabox)
    - [Requirements](#requirements)
    - [Techs](#techs)
    - [Estructure](#estructure)
      - [Repository](#repository)
      - [Services](#cervices)
      - [Controller](#controller)
      - [Routes](#routes)
      - [Licence](#licence)


This is an API challenged by bossaBox to start on the site, is necessary to create a CRUD with dev tools, which will be created with title, link, description and tags properties.

## Requirements

* Is necessary node, yarn or npm, postgres insalled in the machine;
* Don't forget to run `yarn` or `npm install` to install all dependencies;
* Create two databases on postgres named as 'bossaBox' and 'bossaBoxTest', be sure that ormconfig.json is with correct configs (host, port, username, password), and that the databases has uuid functions (run the folow SQL query):
```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## Techs
* [Express (NodeJS)](https://github.com/expressjs/express)
* [TypeScrypt](https://github.com/Microsoft/TypeScript)
* [TypeORM]()
* [PostgreSQL](https://www.postgresql.org/docs/)
* Tests:
  * [Supertest](https://github.com/visionmedia/supertest)
  * [Jest](https://jestjs.io/docs/en/getting-started)

## Estructure

The project can be separated in routes, controller, services and repository:

### Repository

This part of the aplication is used to manipulate the databases, I create an interface IToolRepository to base myself on creating the repository and used the [`tsyringe`](https://github.com/microsoft/tsyringe) lib to inject the right dependence;

### Services

This part is for business rules, of course, as simple project, there is not much rule to apply, but I believe that separate this functions can be more effective, and readable.
Each service will be called by a controller, and will interact with the repository to verify the rules, and return the right answer.

### Controller

In a bigger project this part will be more useful.
This part now is tied to the router, it recieve the entire request and response, filters useful information and send to the service, after service do their work, the controller return it to the client.
What I mean by this part is will be more useful latter is that, if I had a to work with more than 1 object (Tools, Users), I would separate clearly the routes in controllers. 

### Routes

This part of the aplication must recieve the request, and send this to the right controller function, a little simple, I just added a condition in get(tools) by if there's a query named tag, will call diferent controller. This way I was able to keep the same route for both listing and filtering;

### License

[MIT](LICENSE)
