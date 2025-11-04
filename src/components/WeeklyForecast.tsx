import { useUnits } from '../contexts/UnitsContext';
import type { WeeklyForecastType } from '../types/forecast';
import { formatWeekdays } from '../utils/dates';
import { detectIcon } from '../utils/icons';

function WeeklyForecast({
  weeklyForecast,
  isLoading,
}: {
  weeklyForecast: WeeklyForecastType[] | undefined;
  isLoading: boolean;
}) {
  const { temperatureUnit } = useUnits();

  return (
    <div>
      <p className='mb-5 text-lg font-medium'>Weekly Forecast</p>

      <ul className='flex justify-between gap-2'>
        {isLoading ? (
          Array.from({ length: 7 }, (_, index) => index + 1).map((val) => (
            <DailyForecastLoadingItem key={val} />
          ))
        ) : (
          <>
            {weeklyForecast?.map((val) => (
              <DailyForecastItem
                key={val.date.toString()}
                weekday={formatWeekdays(val.date)}
                iconPath={detectIcon(val.condition.code)}
                minDegree={
                  temperatureUnit === 'celsius'
                    ? val.minTemperatureCelsius
                    : val.minTemperatureFahrenheit
                }
                maxDegree={
                  temperatureUnit === 'celsius'
                    ? val.maxTemperatureCelsius
                    : val.maxTemperatureFahrenheit
                }
              />
            ))}
          </>
        )}
      </ul>
    </div>
  );
}

function DailyForecastItem({
  weekday,
  iconPath,
  minDegree,
  maxDegree,
}: {
  weekday: string | undefined;
  iconPath: string | undefined;
  minDegree: number;
  maxDegree: number;
}) {
  return (
    <li className='flex-1 rounded-md border border-sky-700 bg-sky-800 p-4 text-center shadow-sm'>
      <p className='text-sm font-semibold uppercase'>{weekday}</p>
      <img
        src={`/icons/${iconPath}`}
        alt={iconPath}
        className='mx-auto my-4'
        draggable={false}
      />

      <span className='flex justify-between'>
        <span>{`${minDegree}°`}</span>
        <span>{`${maxDegree}°`}</span>
      </span>
    </li>
  );
}

function DailyForecastLoadingItem() {
  return (
    <li className='flex flex-1 flex-col items-center rounded-md border border-sky-700 bg-sky-800 p-3 shadow-sm'>
      <div className='h-5 w-full animate-pulse rounded bg-sky-600/60' />
      <div className='mx-auto my-4 h-24 w-full animate-pulse rounded-md bg-sky-600/60' />

      <div className='h-5 w-full animate-pulse rounded bg-sky-600/60' />
    </li>
  );
}

export default WeeklyForecast;
