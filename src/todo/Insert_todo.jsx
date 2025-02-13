import React from 'react'
import "./style.css"

function Insert_todo() {
  return (
    <div className='insert_todo shadow-xl'>
        <h2 className='head_add'>ADD TODO</h2>
        
        <input type="text" name='insert_task' className='input_task'  />
        <br />
        <button>Add todo</button>
        <button>clear text</button>
    </div>
  )
}

export default Insert_todo