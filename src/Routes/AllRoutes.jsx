import { Flex } from '@chakra-ui/react'
import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Generate from '../pages/Generate'
import About from '../pages/About'
import PrivateRoute from './PrivateRoute'
import { Route, Routes } from 'react-router-dom'

const AllRoutes = () => {
  return (
    <Flex>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/generate"
          element={
            <PrivateRoute>
              <Generate />
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
    </Flex>
  );
}

export default AllRoutes