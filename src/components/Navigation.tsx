import Favorites from './Favorites';
import Logo from './Logo';
import SearchEngine from './SearchEngine';
import UnitsSettingsButton from './UnitsSettingsButton';

function Navigation({
  requestGeolocation,
}: {
  requestGeolocation: () => void;
}) {
  return (
    <nav>
      <div className='mb-14 flex items-center justify-between'>
        <Logo />

        <span className='flex gap-3'>
          <Favorites />
          <UnitsSettingsButton />
        </span>
      </div>

      <p className='mb-12 text-center text-3xl font-bold tracking-wider sm:text-4xl'>
        How's the sky looking today?
      </p>

      <SearchEngine requestGeolocation={requestGeolocation} />
    </nav>
  );
}

export default Navigation;
