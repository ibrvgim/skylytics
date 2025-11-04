import weatherCodes from '../constants/weatherCodes';

export function detectIcon(value: number | undefined) {
  if (!value) return;
  return weatherCodes.find((icon) => icon.codes.includes(value))?.icon;
}
