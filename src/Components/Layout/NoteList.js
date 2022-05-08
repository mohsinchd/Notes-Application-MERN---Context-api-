import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import GlobalContext from "../../Store/GlobalContext";

const NoteList = ({ note, date, id }) => {
  const { deleteNote } = useContext(GlobalContext);

  return (
    <div className="card card-body mt-2 p-3 d-flex justify-content-between">
      <div>
        <h5>Your Note:</h5>
        <p className="lead">{note}</p>
        <h5>Added On:</h5>
        <p className="lead">{date}</p>
      </div>
      <div>
        <button
          className="btn btn-sm btn-danger me-2"
          onClick={() => deleteNote(id)}
        >
          Delete Note
        </button>
        <NavLink to={`/edit/${id}`} className="btn btn-sm btn-success">
          Edit Note
        </NavLink>
      </div>
    </div>
  );
};

export default NoteList;
