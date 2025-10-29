import { Cog6ToothIcon } from '@heroicons/react/24/outline';

function UnitsSettings() {
  return (
    <button className='flex text-sm items-center text-gray-50 cursor-pointer gap-2 bg-sky-800 px-4 py-2 rounded-md shadow-sm hover:opacity-80 duration-200 transition-all'>
      <span className='h-5 w-5'>
        <Cog6ToothIcon />
      </span>
      Units
    </button>
  );
}

export default UnitsSettings;
