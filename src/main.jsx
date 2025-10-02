import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Weather from './components/weather/weather.jsx'
import WeatherApp from './components/weatherForecast/WeatherApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/weather-app' element={<WeatherApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
