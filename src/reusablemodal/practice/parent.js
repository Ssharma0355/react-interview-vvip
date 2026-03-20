import React, { useState } from 'react'
import Modal from './modal';

const ParentModal = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <button onClick={()=>setIsOpen(true)}>Show Modal</button>
        <Modal  isOpen={isOpen} isClose={()=>setIsOpen(false)} value={"My reusable Modal"} />
      
    </div>
  )
}

export default ParentModal
