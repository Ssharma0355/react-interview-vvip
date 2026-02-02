import React, { useState } from 'react'
import UseStateHook from './hooks/UseStateHook'
import MainContext from './hooks/contextapi/MainContext'
import UserList from './apicalls/UserList'
import axios from "axios"
import SearchFeature from './debounce/SearchFeature'
import Life from './lifecyclemethod/Life'
import LifeClass from './lifecyclerevise/LifeClass'
import Parent from './context/Parent'
import ReducerI from './usereducer/ReducerI'
import Reducer2 from './usereducer/Reducer2'
import Memo from './memo/Memo'
import CounterInter from './inteview/CounterInter'
import BerforeCallBack from './useCallback/BerforeCallBack'
import WithCallBack from './useCallback/WithCallBack'
import PlaywithRef from './useRef/PlaywithRef'
import CountApp from './Redux/CountApp'
import IntegrationPage from './GraphQL/IntegrationPage'
import AppFile from './HighOrderComponent/AppFile'
import UseDark from './DarkmodewithHOC/UseDark'
import ShowingFile from './LazyLoading/ShowingFile'
import Custom from './CustomHooks/Custom'
import Parent1 from './Routing/Parent'

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

      {/* <Parent /> */}
      {/* <ReducerI />
      <Reducer2 /> */}
      {/* <Memo /> */}
      {/* <CounterInter /> */}


      {/* useCallback */}
      {/* <BerforeCallBack /> */}
      {/* <WithCallBack /> */}
    

      {/* useRef  */}
      {/* <PlaywithRef /> */}
   
     {/* <CountApp /> */}


     {/* grapql  */}
     {/* <IntegrationPage /> */}


     {/* High Order Component  */}
     {/* <AppFile /> */}
     {/* <UseDark /> */}

     {/* Lazy laoding  */}
     {/* <ShowingFile /> */}



     {/* custom hook  */}
     {/* <Custom /> */}

     {/* Routing */}
     <Parent1 />
     <h1>TO be branch change</h1>
    </div>
  )
}

export default App
