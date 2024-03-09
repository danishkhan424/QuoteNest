import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../authProvider/AuthContextProvider'
import Generate from '../pages/Generate'

const PrivateRoute = () => {
    const { isLoggedIn } = useContext(AuthContext);
    return (
        isLoggedIn ? <Generate /> : <Navigate to="/signup" />
  )
}

export default PrivateRoute