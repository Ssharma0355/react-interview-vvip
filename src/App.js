import React, { useState } from 'react'
import UseStateHook from './hooks/UseStateHook'
import MainContext from './hooks/contextapi/MainContext'

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

      <h1>Context API</h1>
      <MainContext />
      
    </div>
  )
}

export default App
