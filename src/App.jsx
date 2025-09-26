import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

import './css/App.css'

function App() {

  const [todos, setTodos] = useState([
    // 'call mom', 'get milk', 'fly a kite'
  ])


  function handelAddTodos(todo) {
    const newList = [...todos, todo]
    setTodos(newList)
  }


  function handelDeleteTodo(index) {
    const updateList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(updateList)
  }

  function handelEditTodo(index) {
    
  }

  return (
    <div className="page">
      <TodoInput handelAddTodos={handelAddTodos} />
      <TodoList handelDeleteTodo={handelDeleteTodo} todos={todos} />
    </div>
  )
}

export default App
