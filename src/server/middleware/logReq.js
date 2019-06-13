const logger = require('../logger');

module.exports = async (ctx, next) => {
    logger.debug('<-', ctx.request.method, ctx.request.url);

    if (ctx.request.body && ctx.request.body.query) {
        logger.debug(ctx.request.body.query.replace('\\n', '\n'));
    }

    await next();
};
