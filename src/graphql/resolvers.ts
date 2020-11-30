import postgresdb from '../../database/postgresdb';
import {Resolvers} from '../generated/graphql-backend';
import {Author, Book} from '../generated/graphql-frontend';

interface ApolloServerContext {
    author: [Author];
    book: [Book];
    authorsByBookId: [Author];
    Author: Author;
    Book: Book;
}

export const resolvers: Resolvers<ApolloServerContext> = {
    query_root: {
        author: async () => postgresdb('author').select('*'),
        booksByAuthorId: (_parent, args, _context, _info) =>
            postgresdb('book').select('*').where('authorid', args.authorId),
        book: async () => postgresdb('book').select('*')
    },
    author: {
        book: async (parent) => postgresdb('book').select('*').where('authorid', parent.id)
    },
    book: {
        author: async (parent) => postgresdb('author').select('*').where('id', parent.authorid)
    }
};
