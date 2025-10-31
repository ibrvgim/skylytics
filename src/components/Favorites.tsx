import { StarIcon } from '@heroicons/react/24/outline';
import { useRef, useState } from 'react';
import useClickOutside from '../hooks/useClickOutside';
import FavoritesContainer from './FavoritesContainer';

function Favorites() {
  const [isFavoritesActive, setIsFavoritesActive] = useState(false);
  const htmlElement = useRef<HTMLDivElement | null>(null);

  const handleUnitsMenu = () => setIsFavoritesActive((active) => !active);

  useClickOutside(htmlElement, handleUnitsMenu, isFavoritesActive);

  return (
    <div ref={htmlElement} className='relative'>
      <button
        className='flex cursor-pointer items-center gap-2 rounded-md border border-sky-700 bg-sky-800 px-4 py-2 text-sm text-gray-50 shadow-sm transition-all duration-200 hover:opacity-80'
        onClick={handleUnitsMenu}
      >
        <span className='h-5 w-5'>
          <StarIcon />
        </span>
        Favorite Places
      </button>

      {isFavoritesActive && <FavoritesContainer />}
    </div>
  );
}

export default Favorites;
