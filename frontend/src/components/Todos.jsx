import React from "react"


export function Todos({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div key={item._id}>
          <p className="list-items">{item.title}</p>
          <p className="list-items">{item.description}</p>
          <button className="list-items">
            {item.completed ? "completed" : "not complete"}
          </button>
        </div>
      ))}
    </div>
  );
}





