import React from "react";

export default function Todos({ toDoItemFlag, toDoItems }) {
  const renderTodos = () => {
    return (
      <>
        <ul>
          {toDoItems.forEach((item) => {
            //console.log(item);
            return <li>{item}</li>;
          })}
        </ul>
      </>
    );
  };

  return <>{toDoItemFlag && renderTodos()}</>;
}
