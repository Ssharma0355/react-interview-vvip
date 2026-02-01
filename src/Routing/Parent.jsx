import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import Hommie from './Hommie';

const Parent1 = () => {
    const router = createBrowserRouter(
        [
            {
                path:"/",
                element: <Hommie />
            }
        ]
    );

    
  return (
    <div>
         <RouterProvider router={router} />
      
    </div>
  )
}

export default Parent1
