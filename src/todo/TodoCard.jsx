import React from 'react'
import "./style.css"
function TodoCard({todo}) {
  return (
    <div className=' shadow-xl card'>
        <strong> Task no : {todo.ID}</strong>
        <br />
        <span>Task : {todo.task}</span>
        <br />
        <button >done</button>
        <button>clear</button>
    </div>
  )
}

export default TodoCard