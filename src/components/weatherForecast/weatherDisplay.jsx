import { MapPin } from 'lucide-react';

import { WeatherIcon } from '../shared/icon/weatherIcon';
import { Loading } from '../shared/ui/loading';

import { WeatherDetailsGrid } from './weatherDetailsGrid';

export const WeatherDisplay = ({ weather, loading }) => {
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="bg-white/15 backdrop-blur-md rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-center mb-6">
        <MapPin className="w-5 h-5 text-white mr-2" />
        <h2 className="text-xl font-semibold text-white">
          {weather?.city}, {weather?.country}
        </h2>
      </div>

      <div className="text-center mb-8">
        <div className="mb-4">
          <WeatherIcon condition={weather?.condition} size="large" />
        </div>
        <h3 className="text-6xl font-bold text-white mb-2">
          {weather?.temperature}°C
        </h3>
        <p className="text-xl text-blue-100 font-medium">{weather?.condition}</p>
        <p className="text-blue-200 mt-1">{weather?.description}</p>
      </div>

      <WeatherDetailsGrid weather={weather} />
    </div>
  );
};
