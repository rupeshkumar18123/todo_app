import React, { useState } from 'react'
import "./style.css"
import TodoCard from './TodoCard'

function Insert_todo() {
  
  const [inputText,setInputText] =useState("")
  const [msg,setMsg]=useState("")
  const [todos,setTodos]=useState([])
  const [id,setId]=useState(1)
  const add_todo=()=>{
          if(inputText.trim() ===""){
              setMsg("empty task , plzz write a task....")
          }
          else{
            {
              setId(id+1);
              setTodos([...todos,{ID:id,task:inputText,todo_done:false}]);
              setInputText("");
              setMsg("");
            }
          }
  }
  return (
    
    <div >
      <div className='insert_todo shadow-xl'>
        <h2 className='head_add'>ADD TODO</h2>
        
        <input type="text" name='insert_task' className='input_task' value={inputText} onChange={(e)=>setInputText(e.target.value)}  />
        <br />
        <button onClick={add_todo}>Add todo</button>
        <button onClick={()=>{setInputText("")}}>clear text</button>
        <p>{msg}</p>
        </div>
        <div>
        
        <br />
            {
              
              todos.map((todo)=>(
                
                <TodoCard key={todo.id} todo={todo}/>
              ))
            }
            
      </div>
    </div>
  )
}

export default Insert_todo