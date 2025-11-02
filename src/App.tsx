import { useEffect, useState } from 'react';
import CurrentForecast from './components/CurrentForecast';
import HourlyForecast from './components/HourlyForecast';
import Navigation from './components/Navigation';
import WeeklyForecast from './components/WeeklyForecast';
import useGeolocation from './hooks/useGeolocation';
import { forecastWeatherAPI } from './data/weatherAPI';
import type { ForecastType } from './types/forecast';
// import weatherCodes from './constants/weatherCodes';

// find icon by condition code
// console.log(
//   weatherCodes.find((val) => val.codes.includes(forecast?.condition.code))
//     ?.icon,
// );

function App() {
  const [position, isLoading, requestAgain] = useGeolocation();
  const [weatherData, setWeatherData] = useState<ForecastType | null>(null);

  useEffect(() => {
    async function fetchWeatherData() {
      const forecast = (await forecastWeatherAPI()) as ForecastType;
      setWeatherData(forecast);
    }

    fetchWeatherData();
  }, []);

  console.log(weatherData);

  return (
    <div className='min-h-screen bg-sky-900 px-32 py-12 text-gray-50'>
      <Navigation requestGeolocation={requestAgain} />

      <main className='mt-8 grid grid-cols-[2fr_1fr] gap-x-6 gap-y-10 *:rounded-lg'>
        <CurrentForecast
          locationName={position?.join(' ') || 'Berlin, Germany'}
          isLoading={isLoading || !weatherData}
        />
        <HourlyForecast isLoading={isLoading || !weatherData} />
        <WeeklyForecast isLoading={isLoading || !weatherData} />
      </main>
    </div>
  );
}

export default App;
