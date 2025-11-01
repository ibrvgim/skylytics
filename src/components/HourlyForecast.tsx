function HourlyForecast({ isLoading }: { isLoading: boolean }) {
  return (
    <div className='row-span-2 border border-sky-700 bg-sky-800 px-5 py-6'>
      <p className='mb-6 text-lg font-medium'>Hourly Forecast</p>

      <ul className='relative flex flex-col gap-2 overflow-auto'>
        {isLoading
          ? Array.from({ length: 10 }).map(() => <HourlyForecastLoadingItem />)
          : Array.from({ length: 10 }).map(() => (
              <HourlyForecastItem
                iconPath='icon-rain.webp'
                degree='7°'
                time='13:00'
              />
            ))}
      </ul>
    </div>
  );
}

function HourlyForecastItem({
  iconPath,
  degree,
  time,
}: {
  iconPath: string;
  degree: string;
  time: string;
}) {
  return (
    <li className='flex items-center justify-between rounded-md border border-sky-600 bg-sky-700 px-4 py-2 shadow-sm'>
      <span className='flex items-center gap-2'>
        <img
          src={`/icons/${iconPath}`}
          alt='icon drizzle'
          draggable={false}
          className='h-10 w-10'
        />
        <p>{time}</p>
      </span>

      <span className='text-lg'>{degree}</span>
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
