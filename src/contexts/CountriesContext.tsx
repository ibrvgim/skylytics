import { createContext, useContext, useEffect, useState } from 'react';
import { countriesAPI } from '../data/countriesAPI';

const CountriesContext = createContext<{ countriesData: string[] | null }>({
  countriesData: null,
});

export function CountriesContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [countriesData, setCountriesData] = useState<string[] | null>(null);

  useEffect(() => {
    async function fetchCountriesData() {
      const storedCountries = localStorage.getItem('countries');

      if (storedCountries) {
        setCountriesData(JSON.parse(storedCountries));
      } else {
        const allCountries = await countriesAPI();
        setCountriesData(allCountries);
        localStorage.setItem('countries', JSON.stringify(allCountries));
      }
    }

    fetchCountriesData();
  }, []);

  const value = { countriesData };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCountries() {
  const context = useContext(CountriesContext);

  if (!context)
    throw new Error(
      'useCountries must be used within CountriesContextProvider.',
    );

  return context;
}
