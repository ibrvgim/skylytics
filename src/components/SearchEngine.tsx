import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { MdGpsFixed } from 'react-icons/md';

function SearchEngine() {
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
      />

      <button
        className='absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer'
        title='Detect the location'
      >
        <MdGpsFixed className='size-5 text-gray-300 transition-all duration-200 hover:text-white' />
      </button>
    </div>
  );
}

export default SearchEngine;
