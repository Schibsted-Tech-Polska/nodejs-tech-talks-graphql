const { ApolloServer } = require('apollo-server-koa');
const responseCachePlugin = require('apollo-server-plugin-response-cache');
const { typeDefs, resolvers } = require('../graphql');

module.exports = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        settings: {
            'schema.polling.enable': false,
        },
    },
    plugins: [responseCachePlugin()],
});
