import type { ConditionType } from '../types/forecast';

export async function forecastWeatherAPI(
  searchRequest?: string,
  searchRequestOnBackground?: string,
  gpsRequest?: [number, number] | null,
) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_KEY}&q=${searchRequest || searchRequestOnBackground || gpsRequest?.join(',') || 'berlin'}&aqi=no&days=8`,
    );

    if (!response.ok)
      throw new Error(
        'Something went wrong during data fethcing. Please try again.',
      );

    const data = await response.json();

    const weeklyForecast = data.forecast.forecastday.slice(1).map(
      (val: {
        date: string;
        day: {
          condition: ConditionType;
          mintemp_c: number;
          maxtemp_c: number;
          mintemp_f: number;
          maxtemp_f: number;
        };
      }) => {
        return {
          date: val.date,
          condition: val.day.condition,
          minTemperatureCelsius: Math.round(val.day.mintemp_c),
          maxTemperatureCelsius: Math.round(val.day.maxtemp_c),
          minTemperatureFahrenheit: Math.round(val.day.mintemp_f),
          maxTemperatureFahrenheit: Math.round(val.day.maxtemp_f),
        };
      },
    );

    const hourlyForecast = data.forecast.forecastday[0].hour.map(
      (val: {
        condition: ConditionType;
        temp_c: number;
        temp_f: number;
        time: string;
      }) => {
        return {
          condition: val.condition,
          temperatureCelsius: Math.round(val.temp_c),
          temperatureFahrenheit: Math.round(val.temp_f),
          time: val.time,
        };
      },
    );

    return {
      country: data.location.country,
      city: data.location.name,
      localTime: data.location.localtime,
      condition: data.current.condition,
      temperatureCelsius: Math.round(data.current.temp_c),
      temperatureFahrenheit: Math.round(data.current.temp_f),
      feelsLikeCelsius: Math.round(data.current.feelslike_c),
      feelsLikeFahrenheit: Math.round(data.current.feelslike_f),
      humidity: data.current.humidity,
      windKmh: Math.round(data.current.wind_kph),
      windMph: Math.round(data.current.wind_mph),
      precipitationMM: data.current.precip_mm,
      precipitationIN: data.current.precip_in,
      hourlyForecast,
      weeklyForecast,
    };
  } catch (error) {
    console.error(error);
  }
}
