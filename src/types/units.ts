export interface UnitsState {
  temperatureUnit: 'celsius' | 'fahrenheit';
  windSpeed: 'kmh' | 'mph';
  precipitation: 'mm' | 'in';
}

export type UnitsAction =
  | { type: 'switchAll' }
  | { type: 'switchToCelsius' }
  | { type: 'switchToFahrenheit' }
  | { type: 'switchToKmh' }
  | { type: 'switchToMph' }
  | { type: 'switchToMM' }
  | { type: 'switchToIN' };
