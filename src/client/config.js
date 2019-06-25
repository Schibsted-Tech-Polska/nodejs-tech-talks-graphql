export default {
    graphql: {
        uri: 'http://localhost:3000/graphql',
        persistedQueries: true,
        defaultOptions: {
            watchQuery: {
                fetchPolicy: 'no-cache',
                errorPolicy: 'ignore',
            },
            query: {
                fetchPolicy: 'no-cache',
                errorPolicy: 'all',
            },
        },
    },
};
