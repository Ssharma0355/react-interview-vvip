import React, { useState } from 'react'
import { useToggle } from './useToggle'
import { useSidebar } from './useSidebar';

const Custom = () => {
    const [value, toggle] = useToggle(false);

    const [isOpen, side] = useSidebar(false);
  return (
    <div>
        <button onClick={toggle}>modal</button>
        {value ? "Open":"close"}

        <br />
        <button onClick={side}>Sidebar</button>
        {isOpen ? "Sidebar open":"Sidebar close"}
    </div>
  )
}

export default Custom
