import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function noteChange(event) {
    const { name, value } = event.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function onSubmit(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={noteChange}
          name="title"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={noteChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={note.content}
        />
        <button onClick={onSubmit}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
