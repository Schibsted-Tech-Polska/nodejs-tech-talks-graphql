/* eslint-disable no-return-await */
const categoryQueries = require('../db/category');
const productQueries = require('../db/product');

module.exports = {
    Query: {
        categories: async () => await categoryQueries.fetchAll(),
    },
    Category: {
        products: async category => await productQueries.fetchByCategoryId(category.id),
    },
};

/* eslint-enable no-return-await */
