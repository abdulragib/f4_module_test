import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './component/LandingPage/LandingPage.js';
import WeatherData from './component/WeatherData/WeatherData.js';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path='/Weather' element={<WeatherData/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
