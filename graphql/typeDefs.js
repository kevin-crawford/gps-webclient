const { gql } = require("apollo-server");

module.exports = gql`
  type Job {
    id: ID!
    body: String!
    createdAt: String!
    comments: [Comment]!
    customer: Customer!
  }

  type Comment {
    id: ID!
    createdAt: String!
    username: String!
    body: String!
  }

  type Customer {
    id: ID!
    name: String!
    address: String!
    phoneNumber: String!
    jobs: [Job]
  }

  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
    secretKey: String!
  }

  type Query {
    getJobs: [Job]
    getCustomers: [Customer]
    getJob(postId: ID!): Job
    getCustomer(customerId: ID!): Customer
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createJob(body: String!, customer: String!): Job!
    deleteJob(jobId: String!): String!
    createCustomer(
      name: String!
      address: String!
      phoneNumber: String!
    ): Customer!
    deleteCustomer(customerId: ID!): String!
  }
`;
