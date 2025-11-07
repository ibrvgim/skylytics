import { useEffect, useState } from 'react';
import CurrentForecast from './components/CurrentForecast';
import HourlyForecast from './components/HourlyForecast';
import Navigation from './components/Navigation';
import useGeolocation from './hooks/useGeolocation';
import { forecastWeatherAPI } from './data/weatherAPI';
import type { ForecastType } from './types/forecast';
import { useUnits } from './contexts/UnitsContext';
import WeeklyForecast from './components/WeeklyForecast';
import { detectIcon } from './utils/icons';
import { usePlaces } from './contexts/PlacesContext';

function App() {
  const [position, isLoading, requestAgain] = useGeolocation();
  const { temperatureUnit, windSpeed, precipitation } = useUnits();
  const { searchPlace, searchPlaceOnBackground } = usePlaces();

  const [weatherData, setWeatherData] = useState<ForecastType | null>(null);

  useEffect(() => {
    async function fetchWeatherData() {
      const forecast = (await forecastWeatherAPI(
        searchPlace,
        searchPlaceOnBackground,
        position,
      )) as ForecastType;
      setWeatherData(forecast);
    }

    fetchWeatherData();
  }, [position, searchPlace, searchPlaceOnBackground]);

  return (
    <div className='min-h-screen bg-sky-900 px-4 py-12 text-gray-50 sm:px-12 lg:px-20 xl:px-32'>
      <Navigation requestGeolocation={requestAgain} />

      <main className='mt-8 grid gap-x-6 gap-y-10 *:rounded-lg lg:grid-cols-[2fr_1fr]'>
        <CurrentForecast
          locationName={`${weatherData?.city}, ${weatherData?.country}`}
          currentDate={weatherData?.localTime}
          currentDegree={
            temperatureUnit === 'celsius'
              ? weatherData?.temperatureCelsius
              : weatherData?.temperatureFahrenheit
          }
          weatherIcon={detectIcon(weatherData?.condition.code)}
          feelslike={
            temperatureUnit === 'celsius'
              ? weatherData?.feelsLikeCelsius
              : weatherData?.feelsLikeFahrenheit
          }
          humidity={weatherData?.humidity}
          currentPrecipitation={
            precipitation === 'mm'
              ? weatherData?.precipitationMM
              : weatherData?.precipitationIN
          }
          windVelocity={
            windSpeed === 'kmh' ? weatherData?.windKmh : weatherData?.windMph
          }
          isLoading={isLoading || !weatherData}
        />
        <HourlyForecast
          hourlyForecast={weatherData?.hourlyForecast}
          isLoading={isLoading || !weatherData}
        />
        <WeeklyForecast
          weeklyForecast={weatherData?.weeklyForecast}
          isLoading={isLoading || !weatherData}
        />
      </main>
    </div>
  );
}

export default App;
