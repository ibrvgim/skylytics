function Logo() {
  return (
    <span className='flex items-center gap-2 text-xl font-bold tracking-wide'>
      <img
        src='/logo.webp'
        alt='skylytics logo'
        className='h-10 w-10'
        draggable={false}
      />
      <span className='hidden sm:inline-block'>Skylytics</span>
    </span>
  );
}

export default Logo;
