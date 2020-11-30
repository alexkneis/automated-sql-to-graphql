import {GraphQLFileLoader} from '@graphql-tools/graphql-file-loader';
import {loadSchemaSync} from '@graphql-tools/load';
import {makeExecutableSchema} from 'apollo-server-micro';
import {printSchema} from 'graphql';

import {resolvers} from './resolvers';
import {typeDefs} from './type-defs';

const generatedSchema = loadSchemaSync('./src/generated/schema.graphql', {
    loaders: [new GraphQLFileLoader()]
});

export const schema = makeExecutableSchema({
    typeDefs: [printSchema(generatedSchema), typeDefs],
    resolvers
});
