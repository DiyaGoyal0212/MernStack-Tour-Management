import React from 'react'
import{Routes,Route,Navigate} from 'react-router-dom';
import Homee from './../pages/Homee';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import SearchResult from './../pages/SearchResult';
import Login from './../pages/Login';
import Register from './../pages/Register';

const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home" element={<Homee />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Homee />} />
        <Route path="/tours/search" element={<SearchResult/>} />

        
    </Routes>
  )
}

export default Routers
