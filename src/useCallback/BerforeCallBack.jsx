import React, { useState } from 'react'
import BerforeChild from './BerforeChild';

const BerforeCallBack = () => {
    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count+1)
    }
  return (
    <div>
        <h1>{count}</h1>
        <br />
        <button onClick={handleClick}>Increment</button>
        <br />
        <BerforeChild ButtonName={"Clickkk"} handleClick={handleClick} />
      
    </div>
  )
}

export default BerforeCallBack
