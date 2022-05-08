const express = require("express");
const Notes = require("../Database/Models/notesSchema");

const router = express.Router();

// Get All the notes

router.get("/", async (req, res) => {
  try {
    const notes = await Notes.find();
    res.status(200).json(notes);
    console.log(notes);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// Create a new Note

router.post("/create", async (req, res) => {
  try {
    const note = req.body.note;
    const date = Date.parse(req.body.date);

    const newNote = new Notes({
      note,
      date,
    });

    await newNote.save();
    res.status(200).json(newNote);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// Get a single Note

router.get("/:id", async (req, res) => {
  try {
    const note = await Notes.findById({ _id: req.params.id });
    res.status(200).json(note);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// update a note

router.patch("/:id", async (req, res) => {
  try {
    const updatedNote = await Notes.findByIdAndUpdate(
      req.params.id,
      {
        note: req.body.note,
        date: Date.parse(req.body.date),
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedNote);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// Delete a note

router.delete("/:id", async (req, res) => {
  try {
    await Notes.findByIdAndRemove({ _id: req.params.id });
    res.status(200).json("Successfully deleted");
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
