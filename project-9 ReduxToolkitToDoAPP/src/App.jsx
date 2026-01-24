import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/todos'

function App() {
  

  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
        <div className="w-full max-w-xl space-y-6">
        <Addtodo  />
        <Todos />
        </div>
      </div>
    </>
  )
}

export default App
