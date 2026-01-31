import React from 'react'
import { WithAuth } from './utils/WithAuth'

const Dashboard = () => {
  return (
    <div>
      Dashbaord
    </div>
  )
}

// 2nd method to use 
const AuthDashboard = WithAuth(Dashboard)

// export default Dashboard

// 2nd method to use 
export default AuthDashboard

