import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { FaBan } from 'react-icons/fa';
import { cutWords } from '../utils/strings';
import { useEffect, useRef } from 'react';

function FavoritesContainer() {
  const inputElement = useRef<HTMLInputElement | null>(null);
  // temp
  const isEmpty = false;

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, [inputElement]);

  return (
    <div className='absolute top-11 right-0 z-10 w-80 rounded-md border border-sky-700 bg-sky-800 px-2 py-3 shadow-md'>
      <div className='relative w-full'>
        <label
          className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-200'
          htmlFor='searchCity'
        >
          <MagnifyingGlassIcon className='h-5 w-5' />
        </label>

        <input
          ref={inputElement}
          id='searchCity'
          name='searchCity'
          type='search'
          placeholder='Search for a city...'
          className='w-full rounded-md border border-sky-500 bg-sky-700 px-10 py-2 text-sm shadow-sm placeholder:text-sm focus:outline focus:outline-sky-500'
        />
      </div>

      {isEmpty ? (
        <span className='mt-6 mb-2 flex flex-col items-center justify-center gap-2 text-gray-200'>
          <span>
            <FaBan className='size-8 text-gray-200' />
          </span>

          <p>No Places saved yet.</p>
          <p className='text-xs text-gray-200'>( max. 5 cities )</p>
        </span>
      ) : (
        <ul className='mt-4 *:not-last:mb-2'>
          <li>
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
          </li>
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
