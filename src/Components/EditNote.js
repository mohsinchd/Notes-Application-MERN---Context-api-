import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import GlobalContext from "../Store/GlobalContext";

const EditNote = () => {
  const { id } = useParams();
  const { updateNote } = useContext(GlobalContext);
  const [note, setNote] = useState("");
  const [date, setDate] = useState("2022-05-18");
  useEffect(() => {
    getValues();
  }, []);

  const getValues = async () => {
    const response = await fetch(`http://localhost:5000/api/notes/${id}`);
    const result = await response.json();
    setNote(result.note);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    const updatedNote = {
      note,
      date,
    };

    updateNote(updatedNote, id);
  };

  return (
    <div>
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
          Update Your Note
        </button>
      </form>
    </div>
  );
};

export default EditNote;
