function WeeklyForecast() {
  return (
    <div>
      <p className='mb-5 text-lg font-medium'>Weekly Forecast</p>

      <ul className='flex justify-between gap-2'>
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
    <li className='rounded-md border border-sky-700 bg-sky-800 p-4 text-center shadow-sm'>
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

export default WeeklyForecast;
