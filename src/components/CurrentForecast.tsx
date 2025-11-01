import { StarIcon } from '@heroicons/react/24/solid';

function CurrentForecast({
  locationName,
  isLoading,
}: {
  locationName: string;
  isLoading: boolean;
}) {
  return (
    <div>
      <div className='relative flex h-72 items-center justify-between bg-[url(/images/bg-today.svg)] bg-cover bg-center bg-no-repeat px-12 py-20'>
        {isLoading ? (
          <span className='mini-loader mx-auto flex flex-col'></span>
        ) : (
          <>
            <button
              className='absolute top-5 right-5 h-7 w-7 cursor-pointer text-yellow-400'
              title='Add to Favorites'
            >
              <StarIcon />
            </button>

            <span className='block w-1/2'>
              <p className='mb-2 text-4xl font-bold -tracking-wide'>
                {locationName}
              </p>
              <p>Monday, October 30, 2025</p>
            </span>

            <span className='flex items-center gap-2 text-7xl font-bold'>
              <img
                src='/icons/icon-partly-cloudy.webp'
                alt='partly cloudy icon'
                className='h-32 w-32'
                draggable={false}
              />
              14°
            </span>
          </>
        )}
      </div>

      <ul className='mt-6 flex justify-between gap-3'>
        <ConditionItem
          title='Feels like'
          value={isLoading ? '-/-' : '7°'}
          iconPath='temperature.png'
        />
        <ConditionItem
          title='Humidity'
          value={isLoading ? '-/-' : '46%'}
          iconPath='humidity.png'
        />
        <ConditionItem
          title='Wind velocity'
          value={isLoading ? '-/-' : '14 km/h'}
          iconPath='wind.png'
        />
        <ConditionItem
          title='Precipitation'
          value={isLoading ? '-/-' : '0 mm'}
          iconPath='precipitation.png'
        />
      </ul>
    </div>
  );
}

function ConditionItem({
  iconPath,
  title,
  value,
}: {
  iconPath: string;
  title: string;
  value: string;
}) {
  return (
    <li className='flex-1 rounded-md border border-sky-700 bg-sky-800 px-6 py-4 shadow-sm'>
      <img
        src={`/icons/${iconPath}`}
        alt={`${title.toLowerCase()} icon`}
        className='mb-6 h-12 w-12'
        draggable={false}
      />

      <p className='mb-2 tracking-wide'>{title}</p>
      <p className='text-3xl font-extralight'>{value}</p>
    </li>
  );
}

export default CurrentForecast;
