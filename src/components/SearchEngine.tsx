import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MdGpsFixed } from 'react-icons/md';
import { usePlaces } from '../contexts/PlacesContext';
import { useCountries } from '../contexts/CountriesContext';
import { findByPattern } from '../utils/findByPattern';
import useClickOutside from '../hooks/useClickOutside';
import { useRef } from 'react';

function SearchEngine({
  requestGeolocation,
}: {
  requestGeolocation: () => void;
}) {
  const htmlElement = useRef<HTMLDivElement | null>(null);
  const { searchPlace, activeSearchContainer, dispatch } = usePlaces();
  const { countriesData } = useCountries();

  useClickOutside(htmlElement, handleOnClick, activeSearchContainer);

  function handleOnClick() {
    dispatch({ type: 'searchPlace', payload: '' });
    dispatch({ type: 'toggleResultsContainer' });
  }

  const filteredCountries = countriesData?.filter((item) =>
    findByPattern(item, searchPlace),
  );

  return (
    <div ref={htmlElement} className='relative mx-auto sm:w-1/2 lg:w-1/3'>
      <label
        className='absolute top-1/2 left-3 -translate-y-1/2 text-gray-200'
        htmlFor='searchCity'
      >
        <MagnifyingGlassIcon className='h-5 w-5' />
      </label>

      <input
        id='searchCity'
        name='searchCity'
        type='search'
        placeholder='Search for a city...'
        className='w-full rounded-md border border-sky-700 bg-sky-800 px-10 py-2 shadow-sm placeholder:text-sm focus:outline focus:outline-sky-500'
        value={searchPlace}
        onChange={(e) =>
          dispatch({ type: 'searchPlace', payload: e.target.value })
        }
      />

      <button
        className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer'
        title='Detect the location'
        onClick={requestGeolocation}
      >
        <MdGpsFixed className='size-5 text-gray-300 transition-all duration-200 hover:text-white' />
      </button>

      {filteredCountries?.length !== 0 &&
        activeSearchContainer &&
        searchPlace && (
          <ResultsContainer>
            {filteredCountries?.slice(0, 20).map((item) => (
              <button
                key={item}
                onClick={() => {
                  dispatch({ type: 'searchPlace', payload: item });
                  dispatch({ type: 'toggleResultsContainer' });
                }}
              >
                {item}
              </button>
            ))}
          </ResultsContainer>
        )}
    </div>
  );
}

function ResultsContainer({ children }: { children: React.ReactNode }) {
  return (
    <ul className='absolute top-12 left-0 z-10 max-h-[185px] w-full overflow-auto rounded-lg border border-sky-700 bg-sky-800 text-sm text-gray-200 shadow-sm *:block *:w-full *:cursor-pointer *:py-2 *:transition-all *:duration-300 *:not-last:border-b *:not-last:border-b-sky-700 *:hover:bg-sky-700 *:hover:text-white'>
      {children}
    </ul>
  );
}

export default SearchEngine;
