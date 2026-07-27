import { useState } from 'react'

function App() {

  const [count, setCount] = useState(10)

  const inc = () => {
    setCount(count + 1)
  }
  
  const dec = () => {
    setCount(count - 1)
  }
  
  return (
    <>
      <h2 >Q1. Counter</h2>
      <h1 >{count}</h1>
      <button  onClick={inc}>Add</button>
      <button  onClick={dec}>Remove</button>
    </>
  )
}

export default App
