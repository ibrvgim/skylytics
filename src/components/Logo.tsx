function Logo() {
  return (
    <span className='font-bold text-xl tracking-wide flex items-center gap-2'>
      <img
        src='/logo.webp'
        alt='skylytics logo'
        className='h-10 w-10'
        draggable={false}
      />
      Skylytics
    </span>
  );
}

export default Logo;
