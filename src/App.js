import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage';
import Login from './Login';
import Foodies from './Foodies';
import Register from './Register';
import AddRestaurant from './AddRestaurant';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/login" element={<Login />} />
        <Route path = "/register" element={<Register/>}/>
        <Route path= "/foodies" element={<Foodies />} />
        <Route path= "/AddRestaurant" element={<AddRestaurant/>}/>
      </Routes>
    </Router>
  );
}

export default App; 