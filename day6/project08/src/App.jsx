import React from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className=" bg-white h-screen w-screen text-white">
         <h1 className="text-center font-extrabold">Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App
