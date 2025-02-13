import React from 'react'
import TodoCard from './TodoCard'

function TodoList() {
   const todo_arr= [
      { id:1,task:"this is first work",todo_done:false},
      { id:2,task:"this is first work",todo_done:false},
      { id:3,task:"this is first work",todo_done:false}
    ]
    return (
      <div>
        <br />
            {
              
              todo_arr.map((todo)=>(
                
                <TodoCard key={todo.id} todo={todo}/>
              ))
            }
            
      </div>
    )
}

export default TodoList