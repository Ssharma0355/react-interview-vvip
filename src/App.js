import React, { useState } from 'react'
import UseStateHook from './hooks/UseStateHook'

const App = () => {
  const[state, setState] = useState(false)
  const showUseState =()=>{
    setState(!state)
  }
  return (
    <div>
      <h1>Hooks</h1>
      <p>useState Hook</p>
      <UseStateHook />
      

      
    </div>
  )
}

export default App
