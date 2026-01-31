import React from 'react'
import { WithDarkMode } from './WithDarkMode'

const UseDark = () => {
    const mode = WithDarkMode();
  return (
    <div>
        {mode ? "Light":"Dark"}
      
    </div>
  )
}

export default UseDark
