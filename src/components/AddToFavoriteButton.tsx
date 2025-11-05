import { useEffect, useState } from 'react';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

function AddToFavoriteButton({ locationName }: { locationName?: string }) {
  const [favoritePlaces, setFavoritePlaces] = useState<string[]>(() => {
    const storedPlaces = localStorage.getItem('favoritePlaces');
    if (storedPlaces) return JSON.parse(storedPlaces);
    else return [];
  });

  useEffect(() => {
    localStorage.setItem('favoritePlaces', JSON.stringify(favoritePlaces));
  }, [favoritePlaces]);

  function handleFavoritePlace(value?: string) {
    if (!value) return;
    const name = value.toLowerCase();

    if (favoritePlaces.includes(name)) {
      setFavoritePlaces((prev) => {
        const updated = prev.filter((item) => item !== name);
        return updated;
      });
      toast.success(`${value} removed from favorites.`);
    } else {
      if (favoritePlaces.length >= 5)
        return toast.error(
          'You can add a maximum of 5 places to your favorites.',
        );

      setFavoritePlaces((prev) => {
        const updated = [...prev, name];
        return updated;
      });
      toast.success(`${value} added to favorites.`);
    }
  }

  const isFavorite = locationName
    ? favoritePlaces.includes(locationName.toLowerCase())
    : false;

  return (
    <button
      className='absolute top-5 right-5 h-7 w-7 cursor-pointer text-yellow-400'
      title='Add to Favorites'
      onClick={() => handleFavoritePlace(locationName)}
    >
      {isFavorite ? <StarIconSolid /> : <StarIconOutline />}
    </button>
  );
}

export default AddToFavoriteButton;
