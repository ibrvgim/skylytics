import { ArrowPathRoundedSquareIcon } from '@heroicons/react/24/outline';

function UnitsSettingsContainer() {
  return (
    <div className='absolute top-11 right-0 z-10 w-64 rounded-md border border-sky-700 bg-sky-800 px-2 py-3 shadow-md'>
      <button className='mb-4 flex w-full cursor-pointer items-center justify-center gap-1 rounded-md border border-sky-600 bg-sky-700 py-2 text-sm font-medium tracking-wide shadow-sm transition-all duration-300 hover:bg-sky-600'>
        <span>
          <ArrowPathRoundedSquareIcon className='h-5 w-5' />
        </span>
        Switch Units
      </button>

      <div className='*:not-last:mb-2 *:not-last:border-b *:not-last:border-b-sky-700 *:not-last:pb-3'>
        <CategoryItem
          title='Temperature'
          values={['Celsius (°C)', 'Fahrenheit (°F)']}
        />

        <CategoryItem title='Wind Speed' values={['km/h', 'mph']} />

        <CategoryItem
          title='Precipitation'
          values={['Millimeters (mm)', 'Inches (in)']}
        />
      </div>
    </div>
  );
}

function CategoryItem({
  title,
  values,
}: {
  title: string;
  values: [string, string];
}) {
  return (
    <div>
      <p className='mb-2 text-xs font-medium tracking-wide text-gray-300 uppercase'>
        {title}
      </p>

      <ul className='flex flex-col items-start gap-1 text-sm *:w-full *:cursor-pointer *:rounded-md *:px-3 *:py-2 *:text-start *:tracking-wide *:transition-all *:duration-300'>
        {values.map((val) => (
          <button
            key={val}
            className={val === values[0] ? 'bg-sky-600' : 'hover:bg-sky-700'}
          >
            {val}
          </button>
        ))}
      </ul>
    </div>
  );
}

export default UnitsSettingsContainer;
