import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline';
import { useUnits } from '../contexts/UnitsContext';
import type { UnitsAction } from '../types/units';

const values: Record<
  'temperature' | 'windSpeed' | 'precipitation',
  { title: string; key: string; action: UnitsAction }[]
> = {
  temperature: [
    {
      title: 'Celsius (°C)',
      key: 'celsius',
      action: { type: 'switchToCelsius' },
    },
    {
      title: 'Fahrenheit (°F)',
      key: 'fahrenheit',
      action: { type: 'switchToFahrenheit' },
    },
  ],

  windSpeed: [
    {
      title: 'km/h',
      key: 'kmh',
      action: { type: 'switchToKmh' },
    },
    {
      title: 'mph',
      key: 'mph',
      action: { type: 'switchToMph' },
    },
  ],

  precipitation: [
    {
      title: 'Millimeters (mm)',
      key: 'mm',
      action: { type: 'switchToMM' },
    },
    {
      title: 'Inches (in)',
      key: 'in',
      action: { type: 'switchToIN' },
    },
  ],
};

function UnitsSettingsContainer() {
  const { temperatureUnit, windSpeed, precipitation, dispatch } = useUnits();

  return (
    <div className='absolute top-11 right-0 z-10 w-64 rounded-md border border-sky-700 bg-sky-800 px-2 py-3 shadow-md'>
      <button
        className='mb-4 flex w-full cursor-pointer items-center justify-center gap-1 rounded-md border border-sky-600 bg-sky-700 py-2 text-sm font-medium tracking-wide shadow-sm transition-all duration-300 hover:bg-sky-600'
        onClick={() => dispatch({ type: 'switchAll' })}
      >
        <span>
          <ArrowPathRoundedSquareIcon className='h-5 w-5' />
        </span>
        Switch Units
      </button>

      <div className='*:not-last:mb-2 *:not-last:border-b *:not-last:border-b-sky-700 *:not-last:pb-3'>
        <CategoryItem
          title='Temperature'
          values={values['temperature']}
          currentValue={temperatureUnit}
        />

        <CategoryItem
          title='Wind Speed'
          values={values['windSpeed']}
          currentValue={windSpeed}
        />

        <CategoryItem
          title='Precipitation'
          values={values['precipitation']}
          currentValue={precipitation}
        />
      </div>
    </div>
  );
}

function CategoryItem({
  title,
  values,
  currentValue,
}: {
  title: string;
  values: { title: string; key: string; action: UnitsAction }[];
  currentValue: string;
}) {
  const { dispatch } = useUnits();

  return (
    <div>
      <p className='mb-2 text-xs font-medium tracking-wide text-gray-300 uppercase'>
        {title}
      </p>

      <ul className='flex flex-col items-start gap-1 text-sm *:w-full *:cursor-pointer *:rounded-md *:px-3 *:py-2 *:text-start *:tracking-wide *:transition-all *:duration-300'>
        {values.map((val) => (
          <button
            key={val.key}
            className={
              val.key === currentValue ? 'bg-sky-600' : 'hover:bg-sky-700'
            }
            onClick={() => dispatch(val.action)}
          >
            {val.title}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default UnitsSettingsContainer;
