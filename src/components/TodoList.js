import React, {useState} from 'react'
import TodoForm from "./TodoForm"
import Todo from "./Todo"
const TodoList = () => {
    let [todos, setTodos] = useState([])
    let [siffra, setSiffra] = useState(0)

    let addTodo = (todo) =>{
        
       let newTodos = [todo, ...todos]
       setTodos(newTodos)
      
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
            console.log(todos)
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
        console.log(id)

        let temp = ""
        
        if(todos[0].id === id){
            alert("Cant go up")
        }
       
        else{


        for(let i = 0; i < todos.length; i++){
            console.log(todos)
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
        console.log(id)
        let updatedTodos = todos.map(todo => {if(todo.id === id){
            todo.isComplete = !todo.isComplete
        }
        console.log("completeTodo" + "  " + todo)
        return todo
    })
    setTodos(updatedTodos)
  
    console.log(updatedTodos)
    }

    return (
        <div>
            <h1>Whats the plan for today?</h1>
            <TodoForm onSubmit = {addTodo} />
            <Todo todos = {todos} completeTodo = {completeTodo} removeTodo = {removeTodo} updateTodo = {updateTodo} changeTodoDown = {changeTodoDown} changeTodoUp = {changeTodoUp}/>
        </div>
    )
}

export default TodoList
