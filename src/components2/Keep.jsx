import React, { useState } from "react";

const Keep = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const AddEvent = () => {
    props.passnote(note);
    setNote({
      title: "",
      content: "",
    });
  };
  return (
    <div className="main-container-keep">
      <form>
        <div className="child-container-keep">
          <div>
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={InputEvent}
              placeholder="Title"
              autoComplete="off"
            />
          </div>
          <div>
            <textarea
              cols=""
              rows=""
              name="content"
              value={note.content}
              onChange={InputEvent}
              placeholder="Wright A Note"
            ></textarea>
          </div>
          <div>
            <button onClick={AddEvent}>Add</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Keep;
