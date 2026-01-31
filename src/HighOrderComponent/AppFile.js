import React from 'react'
import { WithAuth } from './utils/WithAuth'
import Dashboard from './Dashboard'
import AuthDashboard from './Dashboard'

const AppFile = () => {
    const CheckAuth = WithAuth(Dashboard)
  return (
    <div>
      {/* <CheckAuth /> */}
      

      {/* 2nd method to use  */}
      <AuthDashboard />
    </div>
  )
}

export default AppFile
