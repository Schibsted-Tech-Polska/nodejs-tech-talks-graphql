const bunyan = require('bunyan');
const config = require('./config');

const logger = bunyan.createLogger({
    name: config.bunyan.name,
    serializers: bunyan.stdSerializers,
});
logger.level(process.env.LOG_LEVEL || config.bunyan.level);

module.exports = logger;
