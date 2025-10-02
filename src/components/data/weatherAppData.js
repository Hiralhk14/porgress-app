export const weatherData = {
  cities: {
    "ahmedabad": {
      city: "Ahmedabad",
      country: "India",
      temperature: 32,
      condition: "Clear",
      description: "Clear sky",
      humidity: 45,
      windSpeed: 12,
      visibility: 10,
      feelsLike: 35,
      icon: "clear"
    },
    "mumbai": {
      city: "Mumbai",
      country: "India",
      temperature: 28,
      condition: "Partly Cloudy",
      description: "Few clouds",
      humidity: 78,
      windSpeed: 8,
      visibility: 8,
      feelsLike: 32,
      icon: "cloudy"
    },
    "delhi": {
      city: "Delhi",
      country: "India",
      temperature: 25,
      condition: "Rainy",
      description: "Light rain",
      humidity: 85,
      windSpeed: 15,
      visibility: 5,
      feelsLike: 27,
      icon: "rainy"
    },
    "bangalore": {
      city: "Bangalore",
      country: "India",
      temperature: 22,
      condition: "Cloudy",
      description: "Overcast",
      humidity: 60,
      windSpeed: 10,
      visibility: 7,
      feelsLike: 24,
      icon: "cloudy"
    },
    "surat": {
      city: "Surat",
      country: "India",
      temperature: 30,
      condition: "Clear",
      description: "Sunny day",
      humidity: 50,
      windSpeed: 8,
      visibility: 12,
      feelsLike: 33,
      icon: "clear"
    }
  },
  
  getCityWeather: function(cityName) {
    const city = cityName?.toLowerCase()?.trim();
    return this?.cities[city] || null;
  },
  
  getAvailableCities: function() {
    return Object?.keys(this?.cities)?.map(key => this?.cities[key]?.city);
  }
};