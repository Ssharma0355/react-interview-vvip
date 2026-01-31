import React from 'react'
import { WithAuth } from './utils/WithAuth'
import Dashboard from './Dashboard'

const AppFile = () => {
    const CheckAuth = WithAuth(Dashboard)
  return (
    <div>
      <CheckAuth />
    </div>
  )
}

export default AppFile
