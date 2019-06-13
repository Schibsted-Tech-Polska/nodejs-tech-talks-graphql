const { ApolloServer } = require('apollo-server-koa');
const { typeDefs, resolvers } = require('../graphql');

module.exports = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        settings: {
            'schema.polling.enable': false,
        },
    },
});
