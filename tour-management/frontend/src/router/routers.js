import React from 'react'
import{Routes,Route,Navigate} from 'react-router-dom';

const routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to={<Home />}} />
    </Routes>
  )
}

export default routers
