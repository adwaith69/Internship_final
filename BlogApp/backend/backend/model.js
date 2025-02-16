const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});

const BlogModel = mongoose.model("Blog", blogSchema);
module.exports = BlogModel;