import {gql} from 'apollo-server-micro';

export const typeDefs = gql`
    extend type query_root {
        booksByAuthorId(authorId: Int!): [author]
    }
`;
