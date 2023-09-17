import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="mx-auto max-w-7xl px-2 lg:px-0">
        <div className="mx-auto max-w-3xl md:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
            People who made it successful
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 md:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis
            a vel error explicabo voluptatum nihil possimus veritatis eos culpa.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card name="Piyush" position="Software"/>
          <Card name="Ayuhs" position="Software Developer"/>
          <Card name="Vivek" position="Software"/>
          <Card name="Vikesh" position="Software Developer"/>
        </div>
      </div>
    </>
  )
}

export default App
