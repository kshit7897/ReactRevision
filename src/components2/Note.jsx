import React from "react";

const Note = (props) => {
  const deleteNote = () => {
    props.DeleteItem(props.id);
  };
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      <button onClick={deleteNote}>delete</button>
    </div>
  );
};

export default Note;
