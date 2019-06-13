module.exports = {
    bunyan: {
        name: 'nodejs-tech-talks-graphql',
        level: 'debug',
    },
    cors: {
        allowedOrigins: ['http://localhost'],
        exposeHeaders: [],
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowHeaders: ['Content-Type', 'Accept'],
    },
    db: {
        client: 'pg',
        host: 'db',
        port: 5432,
        user: 'user',
        password: 'password',
        database: 'db',
        pool: {
            min: 2,
            max: 10,
        },
    },
    defaultPort: 3000,
};
