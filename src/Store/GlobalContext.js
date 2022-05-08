import React, { useState, useEffect, createContext } from "react";
import { toast } from "react-toastify";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getAllNotes();
  }, [notes]);

  // get all the notes
  const getAllNotes = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/notes/");
      const result = await response.json();
      setNotes(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  // Add new note

  const addNote = async (note) => {
    try {
      const response = await fetch("http://localhost:5000/api/notes/create", {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(note),
      });

      const result = await response.json();
      setNotes((prevState) => {
        return [...prevState, result];
      });
      toast.success("New Note is Added Successfully!");
    } catch (error) {
      console.log(error.message);
    }
  };

  // Delete a note

  const deleteNote = async (id) => {
    await fetch(`http://localhost:5000/api/notes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "Application/json",
      },
    });

    // setNotes(
    //   notes.filter((note) => {
    //     return note._id !== id;
    //   })
    // );

    toast.dark("Note is Deleted Successfully!");
  };

  // update a note

  const updateNote = async (note, id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/notes/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(note),
      });
      const result = await response.json();
      console.log(result);
      // window.location = "/";
      toast.success("Updated successfuly");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <GlobalContext.Provider value={{ addNote, notes, deleteNote, updateNote }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
