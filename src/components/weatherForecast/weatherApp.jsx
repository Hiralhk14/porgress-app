import React, { useState, useEffect } from 'react';

import { SearchBar } from '../shared/ui/searchBar';
import { ErrorMessage } from '../shared/ui/error';

import { WeatherDisplay } from './WeatherDisplay';
import { weatherData } from '../data/weatherAppData';

const WeatherApp = () => {
	const [weather, setWeather] = useState(null);
	const [city, setCity] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const availableCities = weatherData?.getAvailableCities();

	const searchWeather = async () => {
		if (!city?.trim()) {
			setError('Please enter a city name');
			return;
		}

		setLoading(true);
		setError('');

		setTimeout(() => {
			const weatherResult = weatherData?.getCityWeather(city);

			if (weatherResult) {
				setWeather(weatherResult);
				setError('');
			} else {
				const availableCities = weatherData?.getAvailableCities();
				setError(`City not found. Try: ${availableCities?.join(', ')}`);
				setWeather(null);
			}
			setLoading(false);
		}, 1000);
	};

	useEffect(() => {
		setCity('Ahmedabad');
		setTimeout(() => {
			setWeather(weatherData.getCityWeather('Ahmedabad'));
		}, 500);
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-4">
			<div className="max-w-md mx-auto">
				<div className="text-center mb-8 pt-8">
					<h1 className="text-2xl font-bold text-white mb-2">Weather App</h1>
					<p className="text-blue-100">Get current weather information</p>
				</div>

				<SearchBar
					city={city}
					setCity={setCity}
					onSearch={searchWeather}
					loading={loading}
				/>

				{error && <ErrorMessage message={error} />}

				{weather && <WeatherDisplay weather={weather} loading={loading} />}

				<div className="text-center mt-8">
					<p className="text-blue-100 text-sm">
						Note to Search: {availableCities?.join(', ')}
					</p>
				</div>
			</div>
		</div>
	);
};

export default WeatherApp;