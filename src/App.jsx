import { useState } from 'react'
import './App.css'
import TodoList from './todo/TodoList'
import Insert_todo from './todo/Insert_todo'
import Header from './header/Header'

function App() {

  return (
    <>
    <Header/>
     <Insert_todo/>
     {/* <TodoList/> */}
    </>
  )
}

export default App
