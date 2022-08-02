import React from 'react';
import car1 from '../assets/car1.png';
import car2 from '../assets/car2.png';
import car3 from '../assets/car3.png';
import car4 from '../assets/car4.png';
import tour1 from '../assets/tour1.png';
import tour2 from '../assets/tour2.png';
import tour3 from '../assets/tour3.png';
import tour4 from '../assets/tour4.png';
import bg from '../assets/bg.jpg';

const Home = () => {
  const carImages = [car1, car2, car3, car4];
  const tourImages = [tour1, tour2, tour3, tour4];
  return (
    <>
      <div className='h-screen w-full relative'>
        <img
          src={bg}
          alt=''
          className='h-screen w-full absolute object-cover'
        />
        <div className='h-screen w-full absolute bg-zinc-900/30'></div>
        <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center text-zinc-200 text-center'>
          <h1 className='font-bold text-2xl'>First Class Travel</h1>
          <h2 className='my-3 text-xl font-semibold'>
            Balance work with fun in your trip to the
          </h2>
          <h1 className='text-4xl font-bold track'>PAKISTAN</h1>
        </div>
      </div>

      <div className='w-full px-4 py-16 flex flex-col justify-evenly md:flex-row'>
        <div className='p-4 flex flex-col border-2 text-center rounded-md shadow-xl my-4 md:my-0'>
          <h2 className='text-2xl font-medium'>Rent a Car</h2>
          <div className='grid grid-cols-2 gap-4'>
            {carImages.map((img, index) => {
              return <img src={img} alt='' key={index} />;
            })}
          </div>
          <div className='flex justify-center items-center'>
            <a
              href='#'
              className='text-white bg-blue-600 px-4 py-1 hover:bg-blue-400 hover:px-3 duration-150 ease-in-out'
            >
              <button>Explore More</button>
            </a>
          </div>
        </div>
        <div className='p-4 flex flex-col border-2 text-center rounded-md shadow-xl my-4 md:my-0'>
          <h2 className='text-2xl font-medium'>Tours</h2>
          <div className='grid grid-cols-2 gap-4 my-6'>
            {tourImages.map((img, index) => {
              return <img src={img} alt='' key={index} />;
            })}
          </div>
          <div className='flex justify-center items-center'>
            <a
              href='#'
              className='text-white bg-blue-600 px-4 py-1 hover:bg-blue-400 hover:px-3 duration-150 ease-in-out'
            >
              <button>Explore More</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
