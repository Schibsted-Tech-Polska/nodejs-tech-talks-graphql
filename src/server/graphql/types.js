module.exports = `
    type Category {
      id: ID!
      name: String
      products: [Product] @cacheControl(maxAge: 60)
    }
    
    type Product {
      id: ID!
      name: String
      description: String
    }
    
    type Query {
      categories: [Category]!
    }
`;
