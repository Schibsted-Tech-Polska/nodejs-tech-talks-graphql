/* eslint-disable no-return-await */
const DataLoader = require('dataloader');
const categoryQueries = require('../db/category');
const productQueries = require('../db/product');

const productsLoader = new DataLoader(categoryIds =>
    productQueries
        .fetchByCategoryIds(categoryIds)
        .then(rows => categoryIds.map(id => rows.filter(item => item.category_id === id)))
);

module.exports = {
    Query: {
        categories: async () => await categoryQueries.fetchAll(),
    },
    Category: {
        products: async category => await productsLoader.load(category.id),
    },
};

/* eslint-enable no-return-await */
