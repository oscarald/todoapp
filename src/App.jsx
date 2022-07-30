import { useState } from 'react'
import './App.css'
import Form from "./components/Form"
import Listtodo from './components/Listtodo'
function App() {

const info = [
  {id:1, task:"Probar Aplicacion", completed:false},

]
  const [todos, setTodos] = useState(info)

  const completeToDo = (id) => {
    setTodos(todos.map(todo => {
      if(todo.id===id){
        return {...todo, completed: !todo.completed}
      } else {
        return {...todo}
      }
    }))
  }

  const deleteToDo = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const addToDo = todo => {
    //console.log(todo)
    let newTodo = {id:Math.floor(Date.now() / 1000), task:todo, completed:false}
    //console.log(newTodo)
    setTodos([newTodo,...todos])
  }
  
  return (
    <>
      <Form addToDo={addToDo}/>
      <Listtodo todos={todos} completeToDo={completeToDo} deleteToDo={deleteToDo}/>
    </>
  )
}

export default App
