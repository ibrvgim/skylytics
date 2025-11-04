import { FaBan } from 'react-icons/fa';
import { cutWords } from '../utils/strings';
import { useEffect, useRef } from 'react';

function FavoritesContainer() {
  const inputElement = useRef<HTMLInputElement | null>(null);
  const favoritePlaces = [];

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [inputElement]);

  return (
    <div className='absolute top-11 right-0 z-10 w-80 rounded-md border border-sky-700 bg-sky-800 px-2 py-3 shadow-md'>
      {favoritePlaces.length <= 0 ? (
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
            <li>
              <FavoriteItem
                location={place}
                iconPath='icon-partly-cloudy.webp'
                degree='7°'
              />
            </li>
          ))}
          {/* <li>
            <FavoriteItem
              location='Berlin, Germany'
              iconPath='icon-partly-cloudy.webp'
              degree='7°'
            />
          </li>

          <li>
            <FavoriteItem
              location='Dubai, United Arab Emirates'
              iconPath='icon-sunny.webp'
              degree='28°'
            />
          </li>

          <li>
            <FavoriteItem
              location='Baku, Azerbaijan'
              iconPath='icon-sunny.webp'
              degree='19°'
            />
          </li>

          <li>
            <FavoriteItem
              location='Tbilisi, Georgia'
              iconPath='icon-rain.webp'
              degree='4°'
            />
          </li>

          <li>
            <FavoriteItem
              location='Moscow, Russia'
              iconPath='icon-storm.webp'
              degree='11°'
            />
          </li> */}
        </ul>
      )}
    </div>
  );
}

function FavoriteItem({
  location,
  iconPath,
  degree,
}: {
  location: string;
  iconPath: string;
  degree: string;
}) {
  return (
    <button className='flex w-full cursor-pointer items-center justify-between rounded-md bg-sky-700 px-3 py-3 transition-all duration-300 hover:bg-sky-600'>
      <span className='flex items-center gap-2'>
        <img
          src={`/icons/${iconPath}`}
          alt='icon-partly-cloudy'
          draggable={false}
          className='h-10 w-10'
        />
        <p className='text-sm tracking-wide' title={location}>
          {cutWords(location, 24)}
        </p>
      </span>

      <p>{degree}</p>
    </button>
  );
}

export default FavoritesContainer;
