import React from 'react';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PlaceToStay from './pages/PlaceToStay';
import PageNotFound from './pages/PageNotFound';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/placetostay" element={<PlaceToStay />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
      </BrowserRouter>

      {/* <Home /> */}
      
      
      
      
      {/* <PlaceToStay /> */}
      {/* <Modal /> */}
      
    </div>
  );
}

export default App;
