import { Thermometer, Droplets, Wind, Eye } from 'lucide-react';
import { WeatherDetailCard } from './weatherDeatilsCard';
        
export const WeatherDetailsGrid = ({ weather }) => (
  <div className="grid grid-cols-2 gap-4">
    <WeatherDetailCard
      icon={Thermometer}
      label="Feels like"
      value={`${weather?.feelsLike}°C`}
    />
    <WeatherDetailCard
      icon={Droplets}
      label="Humidity"
      value={`${weather?.humidity}%`}
    />
    <WeatherDetailCard
      icon={Wind}
      label="Wind Speed"
      value={`${weather?.windSpeed} km/h`}
    />
    <WeatherDetailCard
      icon={Eye}
      label="Visibility"
      value={`${weather?.visibility} km`}
    />
  </div>
);