export interface ForecastType {
  country: string;
  city: string;
  localTime: Date;
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
  weeklyForecast: WeeklyForecastType[];
}

export type WeeklyForecastType = {
  condition: ConditionType;
  date: Date;
  maxTemperatureCelsius: number;
  maxTemperatureFahrenheit: number;
  minTemperatureCelsius: number;
  minTemperatureFahrenheit: number;
};

export type HourlyForecastType = {
  condition: ConditionType;
  temperatureCelsius: number;
  temperatureFahrenheit: number;
  time: Date;
};

export type ConditionType = {
  text: string;
  icon: string;
  code: number;
};
