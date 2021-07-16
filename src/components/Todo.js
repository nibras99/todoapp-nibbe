import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import {IoIosArrowDown} from "react-icons/io"
import {IoIosArrowUp} from "react-icons/io"
const Todo = ({ todos, completeTodo, removeTodo, updateTodo, changeTodoDown, changeTodoUp, test }) => {
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
  
let funktion = (todo) =>{
  setEdit({ id: todo.id, value: todo.text })
 
}
  
  if (edit.id) {

    return <TodoForm  edit={edit} onSubmit={submitUpdate} disablerad = {true} />;
   
  }

  return todos.map((todo, index) => (
    <div onMouseEnter = {() => test(todo.text)} onDoubleClick = {() => completeTodo(todo.id)} className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}> 

     
              {todo.text}
      
        <div className='icons'>
          <RiCloseCircleLine   onClick={() => removeTodo(todo.id)} className='delete-icon' />
            <TiEdit onClick={() => funktion(todo)} className='edit-icon' />
              <IoIosArrowDown onClick = {() => changeTodoDown(todo.id)} />
              <IoIosArrowUp onClick = {() => changeTodoUp(todo.id)} />
            
       
        </div>
    </div>
  ));
};

export default Todo;