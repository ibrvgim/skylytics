function errorMessage() {
  return 'Wrong action name. Please insert it correctly.';
}

export function convertTemperature(
  action: 'toCelsius' | 'toFahrenheit',
  value: number,
) {
  if (action === 'toCelsius') {
    return Math.round((value - 32) * (5 / 9));
  }

  if (action === 'toFahrenheit') {
    return Math.round((value * 9) / 5 + 32);
  } else errorMessage();
}

export function convertSpeed(action: 'to-km/h' | 'to-mph', value: number) {
  if (action === 'to-km/h') {
    return Math.round(value * 1.609);
  }

  if (action === 'to-mph') {
    return Math.round(value / 1.609);
  } else errorMessage();
}

export function convertPrecipitation(action: 'to-mm' | 'to-in', value: number) {
  if (action === 'to-mm') {
    return Math.round(value * 25.4);
  }

  if (action === 'to-in') {
    return Math.round(value / 25.4);
  } else errorMessage();
}
