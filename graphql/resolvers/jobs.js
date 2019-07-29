const { AuthenticationError, UserInputError } = require("apollo-server");
const Job = require("../../models/Job");
const Customer = require("../../models/Customer");

const checkAuth = require("../../util/check-auth");

module.exports = {
  Mutation: {
    async createJob(_, { body }, context) {
      console.log("creating job");
      // check user creds using context passed in with request
      const user = checkAuth(context);
      // check if body of request is empty
      if (body.trim() === "") {
        throw new Error("Body must not be empty");
      }

      // TODO: find customer in database

      // add customer id to job body
      const newJob = new Job({
        body,
        customer,
        createdAt: new Date().toISOString()
      });
    }
  }
};
