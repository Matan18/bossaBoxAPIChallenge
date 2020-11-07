# Desafio de API da BossaBox

[English](https://github.com/Matan18/bossaBoxAPIChallenge/blob/master/README.md)
  - [Desafio de API da BossaBox](#Desafio)
    - [Requisitos](#requisitos)
    - [Tecnologias](#tecnologias)
    - [Estrutura](#estrutura)
      - [Repositorio](#repositorio)
      - [Services](#services)
      - [Controller](#controller)
      - [Routes](#routes)
    - [Diagrama da API (blueprint)](https://github.com/Matan18/bossaBoxAPIChallenge/blob/master/apiblueprint.pt.md)
     - [License](#license)


Esse é um desafio de api da BossaBox para começar no site, é necessário criar um CRUD (Create, Read, Update, Delete), de ferramentas de desenvolvimento, que terão os atributos title, link, description e tags.

## Requisitos

* É necessário ter instalado o node, yarn ou npm e postgres na maquina;
* Don't forget to run `yarn` or `npm install` to install all dependencies;
* Não esqueça de rodar `yarn`ou `npm install` para instalar todas as dependencias;
* Também crie 2 banco de dados no postgres com os nomes 'bossaBox' e 'bossaBoxTest', tenha certeza que o ormconfig.json está com as configurações corretas (host, port, username e password), e que os bancos de dados possuem as funções de geradores uuid (rode a seguinte query nos bancos):
```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
```

## Tecnologias
* [Express (NodeJS)](https://github.com/expressjs/express)
* [TypeScrypt](https://github.com/Microsoft/TypeScript)
* [TypeORM](https://typeorm.io/#/)
* [PostgreSQL](https://www.postgresql.org/docs/)
* Tests:
  * [Supertest](https://github.com/visionmedia/supertest)
  * [Jest](https://jestjs.io/docs/en/getting-started)

## Estrutura

O projeto pode ser separado em router, controller, services e repositorio:

### Repositorio

Essa parte da aplicação é usada pra manipular os bancos de dados, eu criei um interface IToolRepository para me baser na criação do repositorio e usei a biblioteca [`tsyringe`](https://github.com/microsoft/tsyringe) pra poder fazer a injeção de dependencia nos Services;

### Services

Essa parte é pra fazer a regra de negócio, claro, como o projeto é simples, não tem muita regra pra aplicar, mas eu acredito que separar essas funcionalidades pode ser mais efetivo pra possíveis inclusões e também mais legível;
Cada service vai ser chamado por um controller, e vai interagir com o repositorio pra verificar as regras, e retornar a resposta certa

### Controller

Num projeto maior, essa parte com certeza seria mais útil.
Essa parte hoje está muito atrelada ao Router, ela recebe tudo das requisições e informações das repostas HTTP, filtra as informações úteis e manda pro service, depois do service fazer seu trabalho, ela retorna pro client;
O que eu quero dizer com essa parte seria mais útil em um projeto maior, é que se eu tivesse que trabalhar com mais de um objeto (hoje tenho apenas Tools, mas se fossem Tools, Users, ...), eu poderia separar com mais clareza os Routers dos controllers.

### Router

Essa parte da aplicação deve receber a requisição, e mandar para o função correta do controller, um pouco simples eu diria, aproveitei da facilidade do express pra adicionar uma condição na requisição GET (tools), assim, se essa requisição tiver um parâmetro do tipo query chamada tags, eu mando pra filtragem, se não mando listar tudo, assim eu consigo manter a mesma rota pras 2 opções;

### Diagrama da API

Clique [aqui](https://github.com/Matan18/bossaBoxAPIChallenge/blob/master/apiblueprint.pt.md) para acessar o diagrama da API

### License

[MIT](LICENSE)
