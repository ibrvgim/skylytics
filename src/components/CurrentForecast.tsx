function CurrentForecast() {
  return (
    <div>
      <div className='flex items-center justify-between bg-[url(/images/bg-today.svg)] bg-cover bg-center bg-no-repeat px-12 py-20'>
        <span>
          <p className='mb-2 text-4xl font-bold -tracking-wide'>
            Berlin, Germany
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
      </div>

      <ul className='mt-6 flex justify-between gap-3'>
        <ConditionItem title='Feels like' value='7°' />
        <ConditionItem title='Humidity' value='46%' />
        <ConditionItem title='Wind velocity' value='14 km/h' />
        <ConditionItem title='Precipitation' value='0 mm' />
      </ul>
    </div>
  );
}

function ConditionItem({ title, value }: { title: string; value: string }) {
  return (
    <li className='flex-1 rounded-md border border-sky-700 bg-sky-800 px-6 py-4 shadow-sm'>
      <p className='mb-2 tracking-wide'>{title}</p>
      <p className='text-3xl font-extralight'>{value}</p>
    </li>
  );
}

export default CurrentForecast;
