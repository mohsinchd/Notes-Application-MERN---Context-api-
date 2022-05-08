const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  note: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
  },
  date: {
    type: Date,
    required: true,
  },
});

const Notes = new mongoose.model("notes", notesSchema);

module.exports = Notes;
