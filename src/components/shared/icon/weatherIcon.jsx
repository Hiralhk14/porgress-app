import { Sun, Cloud, CloudRain, CloudSnow, Zap } from 'lucide-react';

export const WeatherIcon = ({ condition, size = "large" }) => {
  const iconSize = size === "large" ? "w-16 h-16" : "w-8 h-8";

  const getIcon = () => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return <Sun className={`${iconSize} text-yellow-500`} />;
      case 'partly cloudy':
      case 'cloudy':
        return <Cloud className={`${iconSize} text-gray-400`} />;
      case 'rainy':
        return <CloudRain className={`${iconSize} text-blue-500`} />;
      case 'snowy':
        return <CloudSnow className={`${iconSize} text-blue-200`} />;
      case 'stormy':
        return <Zap className={`${iconSize} text-purple-500`} />;
      default:
        return <Sun className={`${iconSize} text-yellow-500`} />;
    }
  };

  return <div className="flex justify-center">{getIcon()}</div>;
};