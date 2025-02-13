import React from 'react'
import TodoCard from './TodoCard'

const todo_arr= [
  { id:1,task:"This is first work",todo_done:false},
  { id:2,task:"This is first work",todo_done:false},
  { id:3,task:"This is first work",todo_done:false}
]

function TodoList() {
   
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