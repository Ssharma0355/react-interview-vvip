// useRef useCase 
// 1st -> to presist the value across re-render
// 2nd -> To directly access the Dom Element by reference 
//  facts -> after updating ref the page dont re-render
//           ref always return an OBJ with value.current

import React, { useRef, useState } from 'react'

const PlaywithRef = () => {
    const [count ,setCount ] = useState(0);
    let val = useRef(0);
    let btnRef = useRef();

    function handleClick(){

        val.current = val.current +1; // persisting the value
        console.log(val)
        setCount(count+2)
    }

    function changeButton(){
        btnRef.current.style.backgroundColor = "red"
    }

  return (
    <div>
      <h1>{count}</h1>
      {/* <h1>{val}</h1> */}
      <button ref={btnRef} onClick={handleClick}>Increment</button>

      <br />
      <button onClick={changeButton}>Change colour of Increment button</button>
    </div>
  )
}

export default PlaywithRef
