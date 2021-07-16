import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import {IoIosArrowDown} from "react-icons/io"
import {IoIosArrowUp} from "react-icons/io"
const Todo = ({ todos, completeTodo, removeTodo, updateTodo, changeTodoDown, changeTodoUp }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine    onClick={() => removeTodo(todo.id)}   className='delete-icon' />
        <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon' />
        <IoIosArrowDown onClick = {() => changeTodoDown(todo.id)} />
        <IoIosArrowUp onClick = {() => changeTodoUp(todo.id)} />
       
      </div>
    </div>
  ));
};

export default Todo;