import React from 'react'
import TodoCard from './TodoCard'
import '../css/TodoList.css'


export default function TodoList(props) {

    const { todos } = props
if (todos.length > 0) {
    return (
        <>
        <ul className='main'>
            {todos.map((task, taskIndex) => {
                return (
                    <>
                    <TodoCard {...props} key={taskIndex} index={taskIndex}>
                        <p>{task.charAt(0).toUpperCase() + task.slice(1)}</p>
                    </TodoCard>
                    </>
                )
            })}
        </ul>
        </>
    )}
else {
    return (
        <li className='no-todo'>
            <h3 className=''>No todo's yet!</h3>
        </li>
    )
}
}
