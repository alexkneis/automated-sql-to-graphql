import knex from 'knex';

const postgresdb = knex({
    client: 'pg',
    connection: {
        host: process.env.POSTGRES_HOST,
        port: 5432,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB
    }
});

export default postgresdb;
