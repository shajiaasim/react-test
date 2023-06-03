import React from 'react';
import './style.css';
import { useState, useRef } from 'react';
import Counter from './Counter.js';
import TodoList from './TodoList.js';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [todoList, setTodoList] = useState([]);

  const toDoListRef = useRef();

  function addTodo() {
    const todo = toDoListRef.current.value;
    const obj = {
      id: Math.floor(Math.random() * 60) + 1,
      name: todo,
      complete: false,
    };
    setTodoList((prevToDos) => {
      console.log(prevToDos);
      return [...prevToDos, obj];
    });
  }

  function checkboxClicked(id) {
    const todos = [...todoList];
    const todo = todos.find((x) => x.id == id);
    todo.complete = !todo.complete;
    setTodoList(todos.filter((todo) => !todo.complete));
  }

  return (
    <>
      <div>
        <Counter counter={counter} setCounter={setCounter} />
        <br />
        <input ref={toDoListRef} type="text" />
        <button onClick={addTodo}> Add to do</button>
        <TodoList todos={todoList} checkboxClicked={checkboxClicked} />
      </div>
    </>
  );
}
