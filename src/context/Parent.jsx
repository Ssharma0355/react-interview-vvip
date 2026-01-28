import React, { createContext } from 'react'
import ChildA from './childs/ChildA';


// creating context 

const NameContext = createContext(); 

const Parent = () => {
  return (
    <NameContext.Provider value={"Sachin"}>
        <ChildA />
    </NameContext.Provider>
  )
}

export default Parent
export {NameContext}
