import React from 'react'
import '../css/TodoCard.css'

export default function TodoCard(props) {

    const { children, handelDeleteTodo, index } = props

    return (
        <li className='task-item'>
            <div className='task-words'>{children}</div>
            <div className='actionsContainer'>
                <button>
                    <i className="fa-solid fa-edit"></i>
                </button>
                <button onClick={() => {
                    handelDeleteTodo(index)
                    console.log(index)
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
    )
}
