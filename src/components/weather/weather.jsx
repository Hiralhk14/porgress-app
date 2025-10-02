import React, { useState } from "react";
import { Sun, Cloud, CloudRain, Snowflake, Wind } from "lucide-react";
import { useNavigate } from "react-router-dom";

import mockWeatherData from "../data/weatherData";

const Weather = () => {
  const [celsius, setCelsius] = useState(true);
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const currentWeather = mockWeatherData[index];

  const tempCalculations = (temp, isCelsius) =>
    isCelsius ? temp : (temp * 9) / 5 + 32;

  const temperatureValue = tempCalculations(
    currentWeather?.temperature,
    celsius
  );

  const gradientBackground = (condition) => {
    switch (condition?.toLowerCase()) {
      case "sunny":
        return "bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500";
      case "rainy":
        return "bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800";
      case "cloudy":
        return "bg-gradient-to-br from-gray-400 via-gray-500 to-gray-700";
      case "snowy":
        return "bg-gradient-to-br from-blue-200 via-blue-300 to-white";
      default:
        return "bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600";
    }
  };

  const getWeatherIcon = (condition) => {
    switch (condition?.toLowerCase()) {
      case "sunny":
        return <Sun className="w-16 h-16 text-yellow-200 drop-shadow-lg" />;
      case "rainy":
        return <CloudRain className="w-16 h-16 text-blue-200 drop-shadow-lg" />;
      case "cloudy":
        return <Cloud className="w-16 h-16 text-gray-200 drop-shadow-lg" />;
      case "snowy":
        return <Snowflake className="w-16 h-16 text-white drop-shadow-lg" />;
      default:
        return <Wind className="w-16 h-16 text-slate-200 drop-shadow-lg" />;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 min-h-screen p-4 gap-6">
      <div
        className={`
        ${gradientBackground(currentWeather?.condition)}
        rounded-3xl shadow-2xl p-8 w-full max-w-sm
        transform transition-all duration-300 hover:scale-105
        backdrop-blur-sm border border-white/20
      `}
      >
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold text-white drop-shadow-md">
            {currentWeather?.city}
          </h1>
        </div>

        <div className="flex flex-col items-center mb-6">
          {getWeatherIcon(currentWeather?.condition)}
          <div className="text-5xl font-light text-white drop-shadow-lg mt-4">
            {temperatureValue}°{celsius ? "C" : "F"}
          </div>
          <span className="mt-2 inline-block bg-white/20 px-4 py-1 rounded-full text-white/90 text-sm font-medium drop-shadow-sm">
            {currentWeather?.condition}
          </span>
          <p className="text-sm text-white/80 mt-1">
            {celsius ? "Celsius" : "Fahrenheit"}
          </p>
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={() => setCelsius(!celsius)}
            className="
            flex-1 bg-white/20 backdrop-blur-sm border border-white/30
            text-white font-semibold py-3 px-6 rounded-2xl
            transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg
            active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/40
          "
          >
            {celsius ? "To °F" : "To °C"}
          </button>
          <button
            onClick={() =>
              setIndex((prev) => (prev + 1) % mockWeatherData?.length)
            }
            className="
            flex-1 bg-white/20 backdrop-blur-sm border border-white/30
            text-white font-semibold py-3 px-6 rounded-2xl
            transition-all duration-300 hover:bg-white/30 hover:scale-105 hover:shadow-lg
            active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/40
          "
          >
            Change Weather
          </button>
        </div>
      </div>

      <button
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-2xl shadow-md hover:bg-blue-600 hover:scale-105 transition-transform duration-200"
        onClick={() => navigate("/weather-app")}
      >
        Go to Another Weather Page
      </button>
    </div>
  );
};

export default Weather;
