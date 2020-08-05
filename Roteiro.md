Meu nome é Mateus Andriola, 22 anos, o que eu mais tenho feito é estudar e jogar mesmo, uma das grandes influências foi meu pai há uns 10 anos, ele entrou em Eng. da Computação e me mostrou um pouco sobre C, com o tempo, como eu jogava bastante quando adolescente, eu decidi que queria fazer jogos hehe, entrei em Eng. Elétrica achando que seria um bom caminho, mas eu não me adaptei ao curso, ano passado consegui começar a estudar com a Alura, só que por ter muita coisa eu perdia o foco de uma linguagem, então comecei em C#, daí estudei um pouco de Python, Java, esse ano, eu fiz a semana OmniStack 10, e achei muito massa o alcance a linguagem, e depois de muito relutar em começar o curso, to terminando o GoStack.

* Como conheceu a BossaBox e porque se interessou por ela;
Principalmente foi uma dica do Diego Fernandes da Rocketseat, dizendo que poderia ser uma oportunidade pra fazer meio que freelancer, que seria uma empresa que faz o intermédio entre o desenvolvedor e a empresa. 
* Como é a sua rotina hoje;
Como não estou trabalhando, eu tenho estudado durante o dia (média de 6 horas por dia), dependendo do dia eu me empolgo e fecha umas 10/12 horas pensando em programação, daí eu tento separar o estudo do lazer, então, depois de terminar a minha meta diária, ou finalizando o que eu tinha determinado como estudo, eu trato como se estivesse voltando pra casa, e faço o que der depois dos estudos.
* Quanto tempo você pode se dedicar à projetos da BossaBox durante a semana;
Eu consigo fazer uma carga horária de trabalho normal (40 horas), se acontecer de eu conseguir algum outro emprego, eu com certeza faço a atualizarção das informações no site.

* Compartilhe sua tela no vídeo e mostre o que você construiu no desafio, passando sobre o código e o resultado final, e os pontos que você julga importante para o funcionamento do mesmo;
  * Estrutura de pastas: 
    * Separei em pasta shared (comuns pra aplicação toda), e tools (pra tratar apenas das ferramentas).
    * Como fiz teste de integração, eu optei por ter um arquivo app (pra utilizar as funções do express) e um arquivo server, que vai só iniciar a aplicação na porta 3000.
    * Tentei seguir um padrão que o Diego mostra no GoStack, eu não tenho certeza se apliquei corretamente o DDD.
  * O que eu vejo mais fundamental na aplicação, com certeza é o uso do TypeORM, ele facilita muito a interação com o banco de dados, eu tive um probleminha com configuração com o banco de dados, mas consegui aprender a não fazer mais isso.
  * Como estou bastante acostumado com a forma que o express é utilizado, foi bem tranquilo mexer.
  * Outra coisa bastante importante pra funcionamento correto da aplicação é a tratação de erros, no app.ts eu uso o express-async-errors pra caso aconteça um erro na aplicação, vai ser tratado por um middleware, se o erro foi proposital, exemplo (criação de uma ferramenta com o titulo já existente), eu retorno uma mensagem customizada, se não, retorno uma padrão de Internal server error

* As decisões que teve que tomar para construí-lo;
  * Por estar bastante acostumado com as principais ferramentas da aplicação (TypeORM e express) eu meio que não pensei muito em como seria essa construção, o que pensei um pouco em fazer seria mesmo os testes como integração (se as rotas funcionam como deveriam) ou unitários (se os services funciona como deveriam), a princípio tomei a decisão de fazer integração porque achei que seria a melhor forma de testar toda a aplicação, e conforme eu fui refatorando o código, acabou que poderia ter feito testes unitários mesmo.
* Ferramentas utilizadas e porquê;
  * Utilizei Express com Node, hoje, JavaScript é a linguagem que eu mais tenho conhecimento, faz tempo que eu não uso as outras linguagens;
  * TypeScript tem sido incrível trabalhar com tipagem no javascript, facilita muito.
  * TypeORM atualmente é o ORM que eu tenho mais conhecimento, então a configuração dele não é difícil.
  * PostgreSQL é o único banco relacional que eu conheço, fora esse eu mexi um pouco com MongoDB e o GoStack também mexe com Redis, mas são dois bancos não relacionais.
  * Jest, realmente é a única estrutura de teste que conheço, utilizei junto o supertest que faz simulação de requisições no express pra poder concluir os testes.
