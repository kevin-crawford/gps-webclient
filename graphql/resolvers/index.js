const usersResolvers = require("./users");
const customersResolvers = require("./customers");

module.exports = {
  Query: {
    ...customersResolvers.Query
  },
  Mutation: {
    ...usersResolvers.Mutation,
    ...customersResolvers.Mutation
  }
};
