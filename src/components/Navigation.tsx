import Favorites from './Favorites';
import Logo from './Logo';
import SearchEngine from './SearchEngine';
import UnitsSettingsButton from './UnitsSettingsButton';

function Navigation() {
  return (
    <nav>
      <div className='mb-14 flex items-center justify-between'>
        <Logo />

        <span className='flex gap-3'>
          <Favorites />
          <UnitsSettingsButton />
        </span>
      </div>

      <p className='mb-12 text-center text-4xl font-bold tracking-wider'>
        How's the sky looking today?
      </p>

      <SearchEngine />
    </nav>
  );
}

export default Navigation;
