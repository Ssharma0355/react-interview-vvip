import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counter/CounterSlice'


const CountApp = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch()

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{dispatch(increment())}}>+</button>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
      
    </div>
  )
}

export default CountApp
