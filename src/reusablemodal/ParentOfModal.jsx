import React, { useState } from 'react'
import ReusableModal from './ReusableModal';

const ParentOfModal = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <button onClick={()=>setIsOpen(true)}>Open Modal</button>
        <ReusableModal
        isOpen={isOpen}
        isClose={()=>setIsOpen(false)}
        value={"ReusableModal"}
        />
    </div>
  )
}

export default ParentOfModal
