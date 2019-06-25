# Node.js Tech Talks - How to use GraphQL for an app bigger than a to-do list

This is demo app that shows how to use GraphQL with:
- [DataLoaders](https://www.apollographql.com/docs/graphql-tools/connectors/#dataloader-and-caching) [github](https://github.com/graphql/dataloader)
- [Automatic persisted queries](https://www.apollographql.com/docs/apollo-server/features/apq)
- [Cache hints](https://www.apollographql.com/docs/apollo-server/features/caching)

## How to use it
First install required dependencies locally using `npm ci`.
Then use [Docker](https://docs.docker.com/install/) to start everything up: `docker-compose up`.
It will setup Postgres database with initial schema and data, server app and client app.

### http://localhost:3000 - Server app
GraphQL Server that retrieves data from Postgres Database

You can use GraphqQL Playground http://localhost:3000/graphql to query sample data
```
{
  categories {
    id
    name
    products {
      id
      name
      description
    }
  }
}
```

Server app logs basic info of every request (method, url, body) and requests made to database.

### http://localhost:8080 - Client app
Simple client built with Webpack that uses Apollo Client to fetch data from server and displays data in json format


## Used packages
### Server app
- koa
- apollo-server-koa
- graphql
- knex
### Client app
- graphql
- apollo-client
- apollo-cache-inmemory
- apollo-link-http
- graphql-tag
- webpack
