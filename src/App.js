import React, { useState } from 'react'
import UseStateHook from './hooks/UseStateHook'
import MainContext from './hooks/contextapi/MainContext'
import UserList from './apicalls/UserList'
import axios from "axios"

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

      <h1>
        user list
      </h1>
      <UserList />
      
    </div>
  )
}

export default App
