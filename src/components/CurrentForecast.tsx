import { formatDate } from '../utils/dates';
import { useUnits } from '../contexts/UnitsContext';
import AddToFavoriteButton from './AddToFavoriteButton';

function CurrentForecast({
  locationName,
  currentDate,
  weatherIcon,
  currentDegree,
  feelslike,
  humidity,
  windVelocity,
  currentPrecipitation,
  isLoading,
}: {
  locationName: string | undefined;
  currentDate: Date | undefined;
  weatherIcon: string | undefined;
  currentDegree: number | undefined;
  feelslike: number | undefined;
  humidity: number | undefined;
  windVelocity: number | undefined;
  currentPrecipitation: number | undefined;
  isLoading: boolean;
}) {
  const { windSpeed, precipitation } = useUnits();

  return (
    <div>
      <div className='relative flex flex-col justify-between bg-[url(/images/bg-today.svg)] bg-cover bg-center bg-no-repeat px-12 py-20 sm:h-72 sm:flex-row sm:items-center'>
        {isLoading ? (
          <span className='mini-loader mx-auto flex flex-col'></span>
        ) : (
          <>
            <AddToFavoriteButton locationName={locationName} />

            <span className='block sm:w-1/2'>
              <p className='mb-2 text-4xl font-bold -tracking-wide'>
                {locationName}
              </p>
              <p>{formatDate(currentDate)}</p>
            </span>

            <span className='flex items-center text-7xl font-bold sm:gap-2'>
              <span className='inline-block sm:hidden'>{`${currentDegree}°`}</span>

              <img
                src={`/icons/${weatherIcon}`}
                alt={weatherIcon}
                className='h-32 w-32'
                draggable={false}
              />
              <span className='hidden sm:inline-block'>{`${currentDegree}°`}</span>
            </span>
          </>
        )}
      </div>

      <ul className='mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4'>
        <ConditionItem
          title='Feels like'
          value={isLoading ? '-/-' : `${feelslike}°`}
          iconPath='temperature.png'
        />
        <ConditionItem
          title='Humidity'
          value={isLoading ? '-/-' : `${humidity}%`}
          iconPath='humidity.png'
        />
        <ConditionItem
          title='Wind velocity'
          value={
            isLoading
              ? '-/-'
              : `${windVelocity} ${windSpeed === 'kmh' ? 'km/h' : 'mph'}`
          }
          iconPath='wind.png'
        />
        <ConditionItem
          title='Precipitation'
          value={
            isLoading
              ? '-/-'
              : `${currentPrecipitation} ${precipitation === 'mm' ? 'mm' : 'in'}`
          }
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
