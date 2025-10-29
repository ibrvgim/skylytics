import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function SearchEngine() {
  return (
    <div className='w-1/3 mx-auto relative'>
      <span className='h-5 w-5 absolute translate-y-1/2 translate-x-1/2 text-gray-200'>
        <MagnifyingGlassIcon />
      </span>

      <input
        type='search'
        placeholder='Search for a city...'
        className='bg-sky-800 py-2 pl-10 pr-3 w-full rounded-md placeholder:text-sm focus:outline focus:outline-sky-500'
      />
    </div>
  );
}

export default SearchEngine;
