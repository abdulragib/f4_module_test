import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './component/LandingPage/LandingPage.js';
import WeatherData from './component/WeatherData/WeatherData.js';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index path="/f4_module_test" element={<LandingPage/>} />
            <Route path='/weather/:cityName' element={<WeatherData/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
