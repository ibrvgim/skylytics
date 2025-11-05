import { FaBan } from 'react-icons/fa';
import { cutWords } from '../utils/strings';
import { useEffect, useRef, useState } from 'react';
import { forecastWeatherAPI } from '../data/weatherAPI';
import { detectIcon } from '../utils/icons';
import { useUnits } from '../contexts/UnitsContext';
import { usePlaces } from '../contexts/PlacesContext';

function FavoritesContainer({ handleClose }: { handleClose: () => void }) {
  const inputElement = useRef<HTMLInputElement | null>(null);
  const [favoritePlaces] = useState<string[] | null>(() => {
    const storedFavroites = localStorage.getItem('favoritePlaces');
    if (storedFavroites) return JSON.parse(storedFavroites);
    else return null;
  });

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [inputElement]);

  return (
    <div className='absolute top-11 right-0 z-10 w-80 rounded-md border border-sky-700 bg-sky-800 px-2 py-3 shadow-md'>
      {!favoritePlaces || favoritePlaces.length === 0 ? (
        <span className='flex flex-col items-center justify-center gap-2 py-3 text-gray-200'>
          <span>
            <FaBan className='mb-1 size-8 text-gray-200' />
          </span>

          <p>No Places saved yet.</p>
          <p className='text-xs text-gray-200'>( max. 5 cities )</p>
        </span>
      ) : (
        <ul className='*:not-last:mb-2'>
          {favoritePlaces.map((place) => (
            <li key={place}>
              <FavoriteItem location={place} handleClose={handleClose} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function FavoriteItem({
  location,
  handleClose,
}: {
  location: string;
  handleClose: () => void;
}) {
  const { temperatureUnit } = useUnits();
  const { dispatch } = usePlaces();
  const [weatherData, setWeatherData] = useState<{
    locationName: string | undefined;
    iconCode: number | undefined;
    temperatureCelsius: number | undefined;
    temperatureFahreheit: number | undefined;
  } | null>(null);

  useEffect(() => {
    async function fetchWeatherData() {
      try {
        const forecast = await forecastWeatherAPI(location);
        setWeatherData({
          locationName: `${forecast?.city}, ${forecast?.country}`,
          iconCode: forecast?.condition.code,
          temperatureCelsius: forecast?.temperatureCelsius,
          temperatureFahreheit: forecast?.temperatureFahrenheit,
        });
      } catch (error) {
        console.error(error);
      }
    }

    fetchWeatherData();
  }, [location]);

  if (!weatherData) return <FavoriteLoadingItem />;

  return (
    <button
      className='flex w-full cursor-pointer items-center justify-between rounded-md bg-sky-700 px-3 py-3 transition-all duration-300 hover:bg-sky-600'
      onClick={() => {
        dispatch({ type: 'searchPlace', payload: '' });
        dispatch({ type: 'searchPlaceOnBackground', payload: location });
        handleClose();
      }}
    >
      <span className='flex items-center gap-2'>
        <img
          src={`/icons/${detectIcon(weatherData?.iconCode)}`}
          alt={detectIcon(weatherData?.iconCode)}
          draggable={false}
          className='h-10 w-10'
        />
        <p className='text-sm tracking-wide' title={location}>
          {cutWords(weatherData?.locationName || '', 24)}
        </p>
      </span>

      <p>{`${temperatureUnit === 'celsius' ? weatherData?.temperatureCelsius : weatherData?.temperatureFahreheit}°`}</p>
    </button>
  );
}

function FavoriteLoadingItem() {
  return (
    <li className='flex items-center justify-between overflow-hidden rounded-md border border-sky-600 bg-sky-700 px-4 py-2 shadow-sm'>
      <span className='flex items-center gap-2'>
        <div className='h-10 w-10 animate-pulse rounded-md bg-sky-600/60' />
        <div className='h-5 w-28 animate-pulse rounded bg-sky-600/60' />
      </span>

      <div className='h-5 w-8 animate-pulse rounded bg-sky-600/60' />
    </li>
  );
}

export default FavoritesContainer;
