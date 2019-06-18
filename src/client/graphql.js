import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { createPersistedQueryLink } from 'apollo-link-persisted-queries';
import gql from 'graphql-tag';
import config from './config';

const cache = new InMemoryCache();
let linkComponents = [createHttpLink({ uri: config.graphql.uri })];

if (config.graphql.persistedQueries) {
    linkComponents = [createPersistedQueryLink({ useGETForHashedQueries: true }), ...linkComponents];
}

const link = ApolloLink.from(linkComponents);

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
