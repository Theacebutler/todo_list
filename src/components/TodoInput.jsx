import React, { useState } from 'react'
import '../css/TodoInput.css'
export default function TodoInput(props) {

    const { handelAddTodos, todoValue, setTodoValue } = props

    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }}
                type="text"
                placeholder='Add a Todo...' />



            <button
                className='add-task-btn'
                onClick={() => {
                    if (!todoValue.trim()) {
                        alert('Write the task first!') 
                        return
                    }
                    handelAddTodos(todoValue)
                    setTodoValue('')
                }}>
                Add
            </button>
        </header>
    )
}
