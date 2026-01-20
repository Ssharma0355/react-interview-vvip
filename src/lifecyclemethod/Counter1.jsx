import React, { useEffect } from 'react'

const Counter1 = ({number}) => {
    useEffect(()=>{
        console.log("Component did mount");

        return()=>{
            console.log("Component unmount");
            // it will show when this component is removed
        }
    },[number])

    // no dependecy will run each time the page is rendered 
    // with empty dependency it will run only 1 time
    // with dependecy it will run when the dependecy is updated
  return (
    <div>
        <h1>Inside Functional Component</h1>
        <h1>{number}</h1>
    </div>
  )
}

export default Counter1
