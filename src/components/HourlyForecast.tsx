function HourlyForecast() {
  return (
    <div className='row-span-2 border border-sky-700 bg-sky-800 px-5 py-6'>
      <p className='mb-6 text-lg font-medium'>Hourly Forecast</p>

      <ul className='relative flex flex-col gap-2 overflow-auto'>
        <HourlyForecastItem
          iconPath='icon-rain.webp'
          degree='7°'
          time='13:00'
        />
        <HourlyForecastItem
          iconPath='icon-sunny.webp'
          degree='7°'
          time='13:00'
        />

        <HourlyForecastItem
          iconPath='icon-rain.webp'
          degree='7°'
          time='13:00'
        />
        <HourlyForecastItem
          iconPath='icon-rain.webp'
          degree='7°'
          time='13:00'
        />
        <HourlyForecastItem
          iconPath='icon-rain.webp'
          degree='7°'
          time='13:00'
        />
        <HourlyForecastItem
          iconPath='icon-rain.webp'
          degree='7°'
          time='13:00'
        />
        <HourlyForecastItem
          iconPath='icon-rain.webp'
          degree='7°'
          time='13:00'
        />
        <HourlyForecastItem
          iconPath='icon-rain.webp'
          degree='7°'
          time='13:00'
        />
        <HourlyForecastItem
          iconPath='icon-rain.webp'
          degree='7°'
          time='13:00'
        />
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

export default HourlyForecast;
