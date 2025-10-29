import Logo from './Logo';
import SearchEngine from './SearchEngine';
import UnitsSettings from './UnitsSettings';

function Navigation() {
  return (
    <nav>
      <div className='mb-14 flex items-center justify-between'>
        <Logo />
        <UnitsSettings />
      </div>

      <p className='text-4xl text-center font-bold tracking-wider mb-12'>
        How's the sky looking today?
      </p>

      <SearchEngine />
    </nav>
  );
}

export default Navigation;
