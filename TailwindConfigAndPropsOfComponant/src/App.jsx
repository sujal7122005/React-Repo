import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componants/card.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">Hello Tailwind CSS!</h1>
      </div>

      <Card cardTitle="Tailwind Card 1" cardDesc="A clean card component built using Tailwind CSS in React." />
      <Card cardTitle="Tailwind Card 2" cardDesc="Another clean card component built using Tailwind CSS in React." />
      <Card cardTitle="Tailwind Card 3" cardDesc="Yet another clean card component built using Tailwind CSS in React." />

    </>
  )
}

export default App
