export interface ForecastType {
  country: string;
  city: string;
  localTime: string;
  condition: ConditionType;
  temperatureCelsius: number;
  temperatureFahrenheit: number;
  feelsLikeCelsius: number;
  feelsLikeFahrenheit: number;
  humidity: number;
  windKmh: number;
  windMph: number;
  precipitationMM: number;
  precipitationIN: number;
  hourlyForecast: HourlyForecastType[];
}

type HourlyForecastType = {
  condition: ConditionType;
  temperatureCelsius: number;
  temperatureFahrenheit: number;
  time: string;
};

export type ConditionType = {
  text: string;
  icon: string;
  code: number;
};
