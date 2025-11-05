export async function countriesAPI() {
  try {
    const response = await fetch(
      'https://countriesnow.space/api/v0.1/countries',
    );

    if (!response.ok)
      throw new Error(
        'Something went wrong during data fethcing. Please try again.',
      );

    const data = await response.json();

    const simplifiedData = data.data.flatMap(
      (item: { country: string; cities: string[] }) => {
        return item.cities.map((city) => `${city}, ${item.country}`);
      },
    );

    return simplifiedData;
  } catch (error) {
    console.error(error);
  }
}
