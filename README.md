# Automated SQL to Graphql Template
In this repository you will find an example of how to set up a PostgresDB in a docker container for your local development based only on pure PSQL,
as well as how to generate types, resolver-interfaces and custom useQuery hooks automatically for the usage of Typescript and GraphQL as querying technology.

## TLDR:
- Setting up a postgres instance in a docker container based on PSQL
- Set up a hasura instance in a docker container and connect it to the postgres instance
- Use the automatically generated GraphQL schema from hasura and extend it with an own schema
- Generate typescript type definitions and type-safe resolver interfaces using the generated schema of hasura
- Generate custom useQuery hooks for react components by writing native GraphQL files

## Usecase:

If you have ever faced the problem of not having a standard solution to set up a local database of the same data for several developers in a team, you may have come across the solution to run a postgres instance inside a docker container.
To use them with GraphQL you need to create a GraphQL schema and the respective types. For the benefit of using Typescript, this step of creating types must be repeated, which is potentially a risk for errors.

## How to use:
This repo contains a NextJS application for which all dependecies have to be installed by:
```bash
npm install
```
To start the postgres database and the hasura engine instances run:
```bash
docker-compose up -d
```
To start the application run
```bash
npm run dev
```

The application can now be accessed in the browser at [localhost:3000](http://localhost:3000).  

The hasura console can be accessed at [http://localhost:8081/console](http://localhost:8081/console) and the generated schema can be tested at [http://localhost:8081/console/api-explorer](http://localhost:8081/console/api-explorer).  

Unter [http:localhost:3000/api/graphql](http:localhost:3000/api/graphql) kann die endgültige GraphQL api getestet werden.

After adding new queries under `src/graphql/queries` or changing the SQLs, the command 
```bash
npm run graphql-codegen
```
can be used to update the GraphQL code again and create the new useQuery hooks.

Attention! To generate, the Graphql schema is used under localhost:3000/api/graphql, so the application must run locally

 


