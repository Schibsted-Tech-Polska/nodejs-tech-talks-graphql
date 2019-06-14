/* eslint-disable no-return-await */
const DataLoader = require('dataloader');
const categoryQueries = require('../db/category');
const productQueries = require('../db/product');

const mapToMany = (keys, keyFn) => rows => {
    const group = new Map(keys.map(key => [key, []]));
    rows.forEach(row => (group.get(keyFn(row)) || []).push(row));

    return Array.from(group.values());
};

const productsLoader = new DataLoader(categoryIds =>
    productQueries.fetchByCategoryIds(categoryIds).then(mapToMany(categoryIds, item => item.category_id))
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
