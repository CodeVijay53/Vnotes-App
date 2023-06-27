const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server running in ${PORT}`));

app.get("/", (req, res) => {
  res.send("You can win");
});

app.get("/app/notes", (req, res) => {
  res.send(notes);
});

app.get("/app/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});