
import { useState } from "react";
import "./CreateTodo.css"




export function CreateTodo() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function updating_title(e) {
    setTitle(e.target.value);
  }
  function updating_description(e) {
    setDescription(e.target.value);
  }

  function updating_todo() {
      fetch("http://localhost:3000/todo", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
        }),
        headers: {
          "content-type": "application/json",
        },
      })
  }

    return (
      <div>
        <form>
          <input
          onChange={updating_title}
          className="input-form"
          type="text"
          placeholder="title"
        ></input>

        <input
          onChange={updating_description}
          className="input-form"
          type="text"
          placeholder="description"
        ></input>

          <button onClick={updating_todo}
          className="input-button" type="submit">
          Add todo
         </button>
        </form>
        
          
      </div>
    );
}