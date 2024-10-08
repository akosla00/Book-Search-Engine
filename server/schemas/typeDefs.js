const typeDefs = `
    type User {
    _id: ID!
    username: String!
    email: String!
    savedBooks: [Book]
    bookCount: Int
    }

    type Book {
    bookId: ID!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
    }

    type Auth {
    token: ID!
    user: User
    }

    type Query {
    me: User
    }

    input BookInput {
    authors: [String]
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
    }

    type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;
