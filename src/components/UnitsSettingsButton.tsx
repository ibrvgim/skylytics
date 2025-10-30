import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import UnitsSettingsContainer from './UnitsSettingsContainer';
import { useRef, useState } from 'react';
import useClickOutside from '../hooks/useClickOutside';

function UnitsSettingsButton() {
  const [isUnitsActive, setIsUnitsActive] = useState(false);
  const htmlElement = useRef<HTMLDivElement | null>(null);

  const handleUnitsMenu = () => setIsUnitsActive((active) => !active);

  useClickOutside(htmlElement, handleUnitsMenu, isUnitsActive);

  return (
    <div ref={htmlElement} className='relative'>
      <button
        className='flex cursor-pointer items-center gap-2 rounded-md border border-sky-700 bg-sky-800 px-4 py-2 text-sm text-gray-50 shadow-sm transition-all duration-200 hover:opacity-80'
        onClick={handleUnitsMenu}
      >
        <span className='h-5 w-5'>
          <Cog6ToothIcon />
        </span>
        Units
      </button>

      {isUnitsActive && <UnitsSettingsContainer />}
    </div>
  );
}

export default UnitsSettingsButton;
