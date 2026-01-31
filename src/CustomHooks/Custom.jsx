import React, { useState } from 'react'
import { useToggle } from './useToggle'

const Custom = () => {
    const [value, toggle] = useToggle(false);
  return (
    <div>
        <button onClick={toggle}>modal</button>
        {value ? "Open":"close"}
    </div>
  )
}

export default Custom
