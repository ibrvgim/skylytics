export function findByPattern(data: string, regPattern: string) {
  const regex = new RegExp(regPattern, 'gi');
  return data.match(regex);
}
