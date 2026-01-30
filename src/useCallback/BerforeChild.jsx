import React from 'react'

const BerforeChild = React.memo((props) => {
    console.log("BerforeChild got re-rendered")
  return (
    <div>
        {/* It can save us from value it doent re-render */}
        {/* <button>{props.ButtonName}</button> */}

        {/* But when function is used it will re-render because of fun create new reference each time at re-render */}
        <button onClick={props.handleClick}>{props.ButtonName}</button> 
      
    </div>
  )
})

export default BerforeChild


// React.memo can save un in case of value but not in function