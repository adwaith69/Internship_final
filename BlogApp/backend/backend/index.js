const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const BlogModel = require("./model");
require('./connection');
const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());

app.post("/add", async (req, res) => {
  try {
    const newBlog = new BlogModel(req.body);
    await newBlog.save();
    res.send({ message: "Blog added successfully!" });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.delete('/blog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const blogPost = await BlogModel.findByIdAndDelete(id);

    if (!blogPost) {
      return res.status(404).send({ error: 'Blog not found' });
    }

    res.status(200).send({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.put('/blog/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const blogPost = await BlogModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!blogPost) {
      return res.status(404).send({ error: 'Blog not found' });
    }

    res.status(200).send(blogPost);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});