const mongoose = require("mongoose");

const TagSchema = mongoose.Schema({
  Guild: String,
  Tag: String,
  Response: String
});

module.exports = mongoose.model('Tags', TagSchema);