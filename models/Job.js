const { model, Schema } = require("mongoose");

const jobSchema = new Schema({
  body: String,
  createdAt: String,
  comments: [
    {
      body: String,
      username: String,
      createdAt: String
    }
  ],
  customer: {
    type: Schema.Types.ObjectId,
    ref: "customers"
  }
});

module.exports = model("Job", jobSchema);
