import CurrentForecast from './components/CurrentForecast';
import HourlyForecast from './components/HourlyForecast';
import Navigation from './components/Navigation';
import WeeklyForecast from './components/WeeklyForecast';

function App() {
  return (
    <div className='min-h-screen bg-sky-900 px-32 py-12 text-gray-50'>
      <Navigation />

      <main className='mt-8 grid grid-cols-[2fr_1fr] gap-x-6 gap-y-10 *:rounded-lg'>
        <CurrentForecast />
        <HourlyForecast />
        <WeeklyForecast />
      </main>
    </div>
  );
}

export default App;
