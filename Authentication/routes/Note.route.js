const express = require("express");

const NoteModel = require("../model/Note.model");

const noteRoute = express.Router();

noteRoute.get("/", (req, res) => {
  res.send("All the notes");
});

noteRoute.post("/create", async (req, res) => {
  const payload = req.body
  try {
    const n_notes = new NoteModel(payload)
    await n_notes.save()
    res.send("add the note")
  } catch (err) {
    console.log(err)
    res.send({ msg: "Somthing wrong" })
  }
});
noteRoute.patch("/updated/:id", (req, res) => {
  const payload = req.body;
  res.send("updated the notes");
});
noteRoute.delete("/delete/:id", (req, res) => {
  res.send("Deleted the notes");
});

module.exports = {
  noteRoute,
};
