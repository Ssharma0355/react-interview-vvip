import React, { useReducer } from 'react'

function reducer(state,action){
    switch(action.type){
        case "Increment":
            return state+1
    }
}

const Reducer2 = () => {
    const [count, dispatch] = useReducer(reducer, 0)
    console.log(count)
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{dispatch({type:"Increment"})}}>increment</button>
      
    </div>
  )
}

export default Reducer2
