import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MdGpsFixed } from 'react-icons/md';
import { usePlaces } from '../contexts/PlacesContext';

function SearchEngine({
  requestGeolocation,
}: {
  requestGeolocation: () => void;
}) {
  const { searchPlace, dispatch } = usePlaces();

  console.log(searchPlace);

  return (
    <div className='relative mx-auto w-1/3'>
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

      {searchPlace && <ResultsContainer />}
    </div>
  );
}

function ResultsContainer() {
  return (
    <ul className='absolute top-12 left-0 z-10 h-[185px] w-full overflow-auto rounded-lg border border-sky-700 bg-sky-800 text-sm text-gray-200 shadow-sm *:block *:w-full *:cursor-pointer *:py-2 *:transition-all *:duration-300 *:not-last:border-b *:not-last:border-b-sky-700 *:hover:bg-sky-700 *:hover:text-white'>
      <button>Berlin, Germany</button>
      <button>Paris, France</button>
      <button>Barcelona, Spain</button>
      <button>Berlin, Germany</button>
      <button>Paris, France</button>
    </ul>
  );
}

export default SearchEngine;
