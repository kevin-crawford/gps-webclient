const { AuthenticationError, UserInputError } = require("apollo-server");
const Customer = require("../../models/Customer");
const checkAuth = require("../../util/check-auth");

module.exports = {
  Query: {
    async getCustomer(_, { customerId }) {
      console.log("getting customer");
      try {
        const customer = await Customer.findById(customerId);
        if (customer) {
          return customer;
        } else {
          throw new Error("Customer not found");
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    async getCustomers() {
      console.log("getting customers");
      try {
        const customers = await Customer.find().sort({ name: 1 });
        return customers;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    async createCustomer(_, { name, address, phoneNumber }, context) {
      console.log("creating customer document");
      const user = checkAuth(context);

      if (name.trim() === "") {
        throw new Error("Name must not be empty");
      }

      const newCustomer = new Customer({
        name,
        address,
        phoneNumber,
        createdAt: new Date().toISOString()
      });

      let checkCustomer = await Customer.find({ name: name });
      console.log(checkCustomer);
      if (checkCustomer.length > 0) {
        throw new Error("Customer already exists");
      }

      const customer = await newCustomer.save();
      return customer;
    }
  },
  async deleteCustomer(_, { customerId }, context) {
    console.log("deleting customer");
    const user = checkAuth(context);

    try {
      const customer = await Customer.findById(customerId);
      await customer.delete();
      return "Customer Deleted";
    } catch (err) {
      throw new Error(err);
    }
  }
};
