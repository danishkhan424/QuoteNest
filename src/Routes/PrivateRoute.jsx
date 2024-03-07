import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../authProvider/AuthContextProvider'
import Generate from '../pages/Generate'

const PrivateRoute = () => {
    const { state: { isLoggedIn }} = useContext(AuthContext)
    return (
        isLoggedIn ? <Generate /> : <Navigate to="/login" />
  )
}

export default PrivateRoute