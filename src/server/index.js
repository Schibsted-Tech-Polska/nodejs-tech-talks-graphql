const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
const config = require('./config');
const logger = require('./logger');
const logReq = require('./middleware/logReq');
const error = require('./middleware/error');
const graphqlServer = require('./middleware/graphql');

const PORT = config.defaultPort || 3000;

const app = new Koa();

// cors
app.use(
    cors({
        origin: ctx => (config.cors.allowedOrigins.includes(ctx.headers.origin) ? ctx.headers.origin : null),
        exposeHeaders: config.cors.exposeHeaders,
        maxAge: config.cors.maxAge,
        credentials: config.cors.credentials,
        allowMethods: config.cors.allowMethods,
        allowHeaders: config.cors.allowHeaders,
    })
);

// body parser
app.use(bodyParser());

// log requests
app.use(logReq);

// error middleware
app.use(error);

// graphql server
graphqlServer.applyMiddleware({ app });

// server
app.listen(PORT, () => {
    logger.info(`Server listening on port: ${PORT}`);
});
