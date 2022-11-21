# Boas-vindas ao repositório do projeto API Filmes!

<details>
  <summary><strong>👨‍💻 O que foi desenvolvido</strong></summary>

  Para este projeto, foi realizado a construção de uma API para um desafio técnico com `CRUD` para gerenciar um catálogo de filmes. Foi utilizando o banco de dados `Postgres` através do framework `TypeORM`.

  <br>
</details>

<details>
  <summary><strong>🐳 Rodando o projeto com Docker</strong></summary>

   ## 👉 Com Docker

   > Rode os serviços com o comando `docker-compose up -d`.

   > Use o comando `docker-compose exec app bash`.

   - Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

    > Instale as dependências com `npm install` 

</details>

<details>
  <summary><strong>‼ Antes de começar a desenvolver</strong></summary>

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:ThiagoGasparini/API-Films.git`.
  - Entre na pasta do repositório que você acabou de clonar:

  2. Instale as dependências

  - `npm install`

  3. Crie uma branch a partir da branch `main`

  - Verifique se você está na branch `main`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `main`
    - Exemplo: `git checkout main`

</details>

# Diretrizes do desafio

## Tarefa (funcional)

  - Desenvolva um sistema de autenticação JWT.

  - Você deve construir uma CRUD de um catálogo de filmes. Todos os endpoints dessa CRUD só devem ser consumidos por um usuário autenticado.

## Ferramentas requeridas

  - TypeScript (Aproximadamente 8 meses de experiência com essa tecnologia)
  - Nest.js (Não Utilizado)
  - TypeORM (Aproximadamente 5 meses de experiência com essa tecnologia)
  - Swagger (Não Utilizado)
  - Docker (Aproximadamente 8 meses de experiência com essa tecnologia)
  - Redis (Aproximadamente 1 mês de experiência com essa tecnologia)
  - PostgreSQL (Aproximadamente 8 meses de experiência com essa tecnologia)

## Ferramentas Utilizadas

  - TypeScript
  - TypeORM
  - Docker
  - Redis
  - PostgreSQL

## Ferramentas Não Utilizadas

  - Nest.js
  - Swagger

  OBS: Não possuo conhecimento nas ferramentas acima, portanto, não utilizei no desenvolvimento da aplicação!!!

## Aspectos técnicos

  - A arquitetura foi composta de uma aplicação provendo uma API RESTful em JSON, utilizando do Redis como cache.