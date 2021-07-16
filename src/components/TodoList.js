import React, {useState} from 'react'
import TodoForm from "./TodoForm"
import Todo from "./Todo"
const TodoList = () => {
    let [todos, setTodos] = useState([])
    let [siffra, setSiffra] = useState(0)
    let [finished, setFinished] = useState(true)

    let addTodo = (todo) =>{
        
        if(todo.text == ""){
            alert("Please enter a task before adding it")
        }
        else{

       let newTodos = [todo, ...todos]
       setTodos(newTodos)
        }
    }

    let test = (id) =>{
        if(finished){
        alert("double click me when you are finished with " + id + "!")
        setFinished(!finished)
      
        }
        else{
          
        }
      }

    let updateTodo = (todoId, newValue) =>{
        
        setTodos(prev => prev.map(item =>(item.id == todoId ? newValue : item ))
        )
        
    }


    let removeTodo = (id) =>{
      let newTodos =  [...todos].filter(todo => todo.id != id)
      setTodos(newTodos)
    }

    let changeTodoDown = (id) =>{

        let temp = ""
        
        if(todos[todos.length-1].id === id){
            alert("Cant go down")

        }
       
        else{


        for(let i = 0; i < todos.length; i++){
            if(todos[i].id == id){
                temp = todos[i]
                todos[i] = todos[i+1]
                todos[i+1] = temp
                break;
            }
        }
          
 }
        setSiffra(siffra+1)
    }

    let changeTodoUp = (id) =>{


        let temp = ""
        
        if(todos[0].id === id){
            alert("Cant go up")
        }
       
        else{


        for(let i = 0; i < todos.length; i++){
            if(todos[i].id == id){
                temp = todos[i]
                todos[i] = todos[i-1]
                todos[i-1] = temp
                break;
            }
        }
          
 }
 setSiffra(siffra+1)
    }

    
    let completeTodo = (id) =>{

        let updatedTodos = todos.map(todo => {if(todo.id === id){
            todo.isComplete = !todo.isComplete
        }

        return todo
    })
    setTodos(updatedTodos)

    }

    return (
        <div>
            <h1>Whats the plan for today?</h1>
            <TodoForm onSubmit = {addTodo} />
            <Todo todos = {todos} completeTodo = {completeTodo} removeTodo = {removeTodo} test = {test}
            updateTodo = {updateTodo} changeTodoDown = {changeTodoDown} changeTodoUp = {changeTodoUp}/>
        </div>
    )
}

export default TodoList
