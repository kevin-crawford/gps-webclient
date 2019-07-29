const { model, Schema } = require("mongoose");

const customerSchema = new Schema({
  name: String,
  address: String,
  phoneNumber: String,
  jobs: [
    {
      type: Schema.Types.ObjectId,
      ref: "jobs"
    }
  ]
});

module.exports = model("Customer", customerSchema);
