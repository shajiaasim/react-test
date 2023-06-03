import React from 'react';

export default function Todo({ todo, checkboxClicked }) {
  function handleChange() {
    checkboxClicked(todo.id);
  }
  return (
    <div>
      <input type="checkbox" onChange={handleChange} checked={todo.complete} />
      <label>{todo.name}</label>
    </div>
  );
}
