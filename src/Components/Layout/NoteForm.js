import React, { useState, useContext } from "react";
import GlobalContext from "../../Store/GlobalContext";
import NoteList from "./NoteList";
const NoteForm = () => {
  const { addNote, notes } = useContext(GlobalContext);

  const [note, setNote] = useState("");
  const [date, setDate] = useState("2022-05-18");

  const submitFormHandler = (e) => {
    e.preventDefault();
    const newNote = {
      note,
      date,
    };

    addNote(newNote);

    setNote("");
  };

  return (
    <>
      <form onSubmit={submitFormHandler}>
        <div className="form-group">
          <label htmlFor="note">Enter Note:</label>
          <textarea
            id="note"
            cols="30"
            rows="5"
            onChange={(e) => setNote(e.target.value)}
            className="form-control"
            value={note}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="form-control w-25"
          />
        </div>

        <button type="submit" className="btn btn-outline-primary mt-2">
          Save Your Note
        </button>
      </form>

      {notes.map((note) => (
        <NoteList
          key={note._id}
          id={note._id}
          note={note.note}
          date={note.date}
        />
      ))}
    </>
  );
};

export default NoteForm;
