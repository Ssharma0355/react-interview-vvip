import React, { useState } from 'react'
import UseStateHook from './hooks/UseStateHook'
import MainContext from './hooks/contextapi/MainContext'
import UserList from './apicalls/UserList'
import axios from "axios"
import SearchFeature from './debounce/SearchFeature'
import Life from './lifecyclemethod/Life'
import LifeClass from './lifecyclerevise/LifeClass'
import Parent from './context/Parent'

const App = () => {
  const[state, setState] = useState(false);
  const[lifeComp,setLifeComp] = useState(true);
  const showUseState =()=>{
    setState(!state)
  }
  return (
    <div>
      {/* <h1>Hooks</h1> */}
      {/* <p>useState Hook</p>
      <UseStateHook />

      <h1>Context API</h1>
      <MainContext />

      <h1>
        user list
      </h1>
      <UserList /> */}
      {/* <SearchFeature /> */}
      {/* this is class component */}
      {/* <Life /> */}
      {/* {lifeComp ?<LifeClass /> : ""}
      <button onClick={()=>setLifeComp(!lifeComp)}>unmount button</button> */}

      <Parent />
    </div>
  )
}

export default App
