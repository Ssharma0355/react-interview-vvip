import React, { createContext } from 'react'
import ChildA from '../../childrens/ChildA';
import ChildB from '../../childrens/ChildB';
import ChildC from '../../childrens/ChildC';


const userContext = createContext();

const MainContext = () => {
    
  return (
    <div>
        <userContext.Provider value={"Sachin is a React Developer"}>
            <ChildA />
            <ChildB />
            <ChildC />
        </userContext.Provider>
      
    </div>
  )
}

export default MainContext
export {userContext}
