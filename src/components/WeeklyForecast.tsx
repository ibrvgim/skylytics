function WeeklyForecast({ isLoading }: { isLoading: boolean }) {
  return (
    <div>
      <p className='mb-5 text-lg font-medium'>Weekly Forecast</p>

      <ul className='flex justify-between gap-2'>
        {isLoading ? (
          Array.from({ length: 7 }).map(() => <DailyForecastLoadingItem />)
        ) : (
          <>
            <DailyForecastItem
              weekday='Monday'
              iconPath='icon-drizzle.webp'
              earlyDegree='16°'
              lateDegree='7°'
            />
            <DailyForecastItem
              weekday='Tuesday'
              iconPath='icon-fog.webp'
              earlyDegree='16°'
              lateDegree='7°'
            />
            <DailyForecastItem
              weekday='Wednesday'
              iconPath='icon-sunny.webp'
              earlyDegree='16°'
              lateDegree='7°'
            />
            <DailyForecastItem
              weekday='Thursday'
              iconPath='icon-partly-cloudy.webp'
              earlyDegree='16°'
              lateDegree='7°'
            />
            <DailyForecastItem
              weekday='Friday'
              iconPath='icon-rain.webp'
              earlyDegree='16°'
              lateDegree='7°'
            />
            <DailyForecastItem
              weekday='Saturday'
              iconPath='icon-snow.webp'
              earlyDegree='16°'
              lateDegree='7°'
            />
            <DailyForecastItem
              weekday='Sunday'
              iconPath='icon-storm.webp'
              earlyDegree='16°'
              lateDegree='7°'
            />
          </>
        )}
      </ul>
    </div>
  );
}

function DailyForecastItem({
  weekday,
  iconPath,
  earlyDegree,
  lateDegree,
}: {
  weekday: string;
  iconPath: string;
  earlyDegree: string;
  lateDegree: string;
}) {
  return (
    <li className='flex-1 rounded-md border border-sky-700 bg-sky-800 p-4 text-center shadow-sm'>
      <p className='text-sm font-semibold uppercase'>{weekday.slice(0, 3)}</p>
      <img
        src={`/icons/${iconPath}`}
        alt='icon drizzle'
        className='mx-auto my-4'
        draggable={false}
      />

      <span className='flex justify-between text-lg'>
        <span>{earlyDegree}</span>
        <span>{lateDegree}</span>
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
