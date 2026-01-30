import React from 'react'

const WithChild = (props) => {
    console.log("It re-render")
  return (
    <div>
        <button onClick={handleClick}>{props.buttonName}</button>
    </div>
  )
}

export default WithChild
