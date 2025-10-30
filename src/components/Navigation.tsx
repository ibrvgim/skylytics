import Logo from './Logo';
import SearchEngine from './SearchEngine';
import UnitsSettingsButton from './UnitsSettingsButton';

function Navigation() {
  return (
    <nav>
      <div className='mb-14 flex items-center justify-between'>
        <Logo />
        <UnitsSettingsButton />
      </div>

      <p className='mb-12 text-center text-4xl font-bold tracking-wider'>
        How's the sky looking today?
      </p>

      <SearchEngine />
    </nav>
  );
}

export default Navigation;
