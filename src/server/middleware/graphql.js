const { ApolloServer } = require('apollo-server-koa');
const { typeDefs, resolvers } = require('../graphql');
const config = require('../config');

module.exports = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        settings: {
            'schema.polling.enable': false,
        },
    },
    cacheControl: {
        defaultMaxAge: config.graphql.defaultMaxAge,
    },
});
