import React from 'react'
import '../css/TodoCard.css'

export default function TodoCard(props) {

    const { children, handelDeleteTodo, handelEditTodo, index } = props

    return (
        <li className='task-item'>
            <div className='task-words'>{children}</div>
            <div className='actionsContainer'>
                <button onClick={() => {
                    handelEditTodo(index)
                }}>
                    <i className="fa-solid fa-edit"></i>
                </button>
                <button onClick={() => {
                    handelDeleteTodo(index)
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}
