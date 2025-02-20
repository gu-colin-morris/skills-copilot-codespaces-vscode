// Create web server
// Create routes

const express = require("express");
const app = express();

const comments = require("./comments.js");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/comments", (req, res) => {
  res.json(comments.getComments());
});

app.post("/comments", (req, res) => {
  const { name, comment } = req.body;
  comments.addComment(name, comment);
  res.json(comments.getComments());
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
