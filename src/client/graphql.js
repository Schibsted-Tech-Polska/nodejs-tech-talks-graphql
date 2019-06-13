import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import gql from 'graphql-tag';
import config from './config';

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: config.graphql.uri,
});

const client = new ApolloClient({
    cache,
    link,
    defaultOptions: config.graphql.defaultOptions,
});

const fetchCategories = async () => {
    const res = await client.query({
        query: gql`
            query getCategories {
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
        `,
        variables: {},
    });

    return res.data.categories;
};

export default {
    fetchCategories,
};
