const knex = require('./connection');

const fetchByCategoryId = categoryId =>
    knex
        .select('*')
        .from('product')
        .where({ category_id: categoryId });

const fetchByCategoryIds = categoryIds =>
    knex
        .select('*')
        .from('product')
        .whereIn('category_id', categoryIds);

module.exports = {
    fetchByCategoryId,
    fetchByCategoryIds,
};
