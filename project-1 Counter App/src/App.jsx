import { useState } from 'react'

import './App.css'

function App() {
  const [Counter, SetCounter] = useState(0)
  
  const AddValue = () => {
    SetCounter(Counter + 1)
  }
  
  const RemoveValue = () => {
    SetCounter(Counter - 1)
  }
  return (
    <>
      <h1>Counter App With React</h1>
      <h2>Count Value : {Counter}</h2>
      <button
      onClick={AddValue}
      >Add the value</button>{"  "}
      <button
      onClick={RemoveValue}
      >remove the value</button>
      <h2>Footer : Finall count value is {Counter}</h2>

    </>
  )
}

export default App
