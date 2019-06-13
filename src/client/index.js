import graphql from './graphql';

document.addEventListener('DOMContentLoaded', async function run() {
    const element = document.createElement('pre');
    element.innerHTML = 'Loading data...';
    document.body.appendChild(element);

    const data = await graphql.fetchCategories();
    element.innerHTML = JSON.stringify(data, null, 2);
});
