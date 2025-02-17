import React, { useState } from 'react'
import "./style.css"
function TodoCard({todo,onDelete,todo_update}) {
  const [msg_done,setMsg_done] = useState("");
  const [isDone,setIsDone]=useState(false);
  const todo_done=()=>{
       setMsg_done("work finished..!!");
       setIsDone(true);
  }
  return (
    <div className={`shadow-xl card ${isDone ? 'completed' : ''}`}>    
    {/* ${isDone ? 'completed' : ''}     ----> not able to add */}
        <strong> Task no : {todo.ID}</strong>
        <br />
        <span>Task : {todo.task}</span>
        <br />
        <button onClick={todo_done}  disabled={isDone}>done</button>
        {/* add update button */}
        <button onClick={()=>todo_update(todo.ID)}  disabled={isDone}>update task</button>
        <button onClick={()=>{onDelete(todo.ID)}}>clear</button>
        <p>{msg_done}</p>
    </div>
  )
}

export default TodoCard