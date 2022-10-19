import Image from 'next/image';

const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image
        src='/forest.webp'
        layout='fill'
        objectFit='cover'
        objectPosition='bottom'
        alt='Forest Image'
      />

      <div className='absolute top-1/2 w-full text-center mt-[-20px] md:mt-[-80px]'>
        <p className='text-sm sm:text-xl'>Not sure where to go? Perfect.</p>
        <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
          I'm Flexible!
        </button>
      </div>
    </div>
  );
};

export default Banner;
