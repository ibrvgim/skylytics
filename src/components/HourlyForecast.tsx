import { useUnits } from '../contexts/UnitsContext';
import type { HourlyForecastType } from '../types/forecast';
import { formatTime } from '../utils/dates';
import { detectIcon } from '../utils/icons';

const currentDate = new Date();

function HourlyForecast({
  hourlyForecast,
  isLoading,
}: {
  hourlyForecast: HourlyForecastType[] | undefined;
  isLoading: boolean;
}) {
  const { temperatureUnit } = useUnits();

  const filteredForecast = hourlyForecast
    ?.filter((val) => {
      const convertedDate = new Date(val.time);
      return convertedDate.getTime() > currentDate.getTime();
    })
    .slice(0, 10);

  return (
    <div className='row-span-2 overflow-auto border border-sky-700 bg-sky-800 px-5 py-6'>
      <p className='mb-6 text-lg font-medium'>Hourly Forecast</p>

      <ul className='relative flex flex-col gap-2 overflow-auto'>
        {isLoading
          ? Array.from(
              { length: filteredForecast?.length || 10 },
              (_, index) => index + 1,
            ).map((val) => <HourlyForecastLoadingItem key={val} />)
          : filteredForecast?.map((val) => {
              return (
                <HourlyForecastItem
                  key={val.time.toString()}
                  iconPath={detectIcon(val.condition.code)}
                  degree={
                    temperatureUnit === 'celsius'
                      ? val.temperatureCelsius
                      : val.temperatureFahrenheit
                  }
                  time={val.time}
                />
              );
            })}
      </ul>
    </div>
  );
}

function HourlyForecastItem({
  iconPath,
  degree,
  time,
}: {
  iconPath: string | undefined;
  degree: number;
  time: Date;
}) {
  return (
    <li className='flex items-center justify-between rounded-md border border-sky-600 bg-sky-700 px-4 py-2 shadow-sm'>
      <span className='flex items-center gap-2'>
        <img
          src={`/icons/${iconPath}`}
          alt={iconPath}
          draggable={false}
          className='h-10 w-10'
        />
        <p>{formatTime(time)}</p>
      </span>

      <span className='text-lg'>{`${degree}°`}</span>
    </li>
  );
}

function HourlyForecastLoadingItem() {
  return (
    <li className='flex items-center justify-between overflow-hidden rounded-md border border-sky-600 bg-sky-700 px-4 py-2 shadow-sm'>
      <span className='flex items-center gap-2'>
        <div className='h-10 w-10 animate-pulse rounded-md bg-sky-600/60' />
        <div className='h-5 w-28 animate-pulse rounded bg-sky-600/60' />
      </span>

      <div className='h-5 w-8 animate-pulse rounded bg-sky-600/60' />
    </li>
  );
}

export default HourlyForecast;
