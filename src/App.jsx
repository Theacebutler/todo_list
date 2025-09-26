import { useState, useEffect} from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

import './css/App.css'
import './css/responsive.css'

function App() {

  const [todos, setTodos] = useState([
    // 'call mom', 'get milk', 'fly a kite'
  ])
    const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handelAddTodos(todo) {
    const newList = [...todos, todo]
    persistData(newList)
    setTodos(newList)
  }


  function handelDeleteTodo(index) {
    const updateList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(updateList)
    setTodos(updateList)
  }

  function handelEditTodo(index) {
    const taskToEdit = todos[index]
    setTodoValue(taskToEdit)
    handelDeleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos')
    if(!localTodos) {
      return
    }
    
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <div className="page">
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handelAddTodos={handelAddTodos} />
      <TodoList handelDeleteTodo={handelDeleteTodo} handelEditTodo={handelEditTodo} todos={todos} />
    </div>
  )
}

export default App
