const { ApolloServer } = require('apollo-server-koa');
const responseCachePlugin = require('apollo-server-plugin-response-cache');
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
    plugins: [responseCachePlugin()],
    cacheControl: {
        defaultMaxAge: config.graphql.defaultMaxAge,
    },
});
