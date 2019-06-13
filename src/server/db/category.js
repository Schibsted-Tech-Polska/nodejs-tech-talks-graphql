const knex = require('./connection');

const fetchAll = () => knex.select('*').from('category');

module.exports = {
    fetchAll,
};
