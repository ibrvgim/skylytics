import type { ConditionType } from '../types/forecast';

export async function forecastWeatherAPI() {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${import.meta.env.VITE_WEATHER_KEY}&q=Baku&aqi=no&days=8`,
    );

    if (!response.ok)
      throw new Error(
        'Something went wrong during data fethcing. Please try again.',
      );

    const data = await response.json();

    const weeklyForecast = data.forecast.forecastday
      .slice(1)
      .map(
        (val: {
          date: string;
          condition: ConditionType;
          day: {
            mintemp_c: number;
            maxtemp_c: number;
            mintemp_f: number;
            maxtemp_f: number;
          };
        }) => {
          return {
            date: val.date,
            condition: val.condition,
            minTemperatureCelsius: val.day.mintemp_c,
            maxTemperatureCelsius: val.day.maxtemp_c,
            minTemperatureFahrenheit: val.day.mintemp_f,
            maxTemperatureFahrenheit: val.day.maxtemp_f,
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
          temperatureCelsius: val.temp_c,
          temperatureFahrenheit: val.temp_f,
          time: val.time,
        };
      },
    );

    return {
      country: data.location.country,
      city: data.location.name,
      localTime: data.location.localtime,
      condition: data.current.condition,
      temperatureCelsius: data.current.temp_c,
      temperatureFahrenheit: data.current.temp_f,
      feelsLikeCelsius: data.current.feelslike_c,
      feelsLikeFahrenheit: data.current.feelslike_f,
      humidity: data.current.humidity,
      windKmh: data.current.wind_kph,
      windMph: data.current.wind_mph,
      precipitationMM: data.current.precip_mm,
      precipitationIN: data.current.precip_in,
      hourlyForecast,
      weeklyForecast,
    };
  } catch (error) {
    console.error(error);
  }
}
