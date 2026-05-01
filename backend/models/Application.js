const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  jobTitle: String,
});

module.exports = mongoose.model("Application", applicationSchema);