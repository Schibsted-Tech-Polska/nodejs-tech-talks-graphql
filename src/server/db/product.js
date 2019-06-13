const knex = require('./connection');

const fetchByCategoryId = categoryId =>
    knex
        .select('*')
        .from('product')
        .where({ category_id: categoryId });

module.exports = {
    fetchByCategoryId,
};
