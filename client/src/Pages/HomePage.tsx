import React from 'react';
import { BiSearch, BiX } from 'react-icons/bi';
import { BsBoxArrowInUpRight } from 'react-icons/bs';
import { PiDotsThreeOutlineLight } from 'react-icons/pi';

function HomePage() {
  return (
    <div className='flex-1 md:ml-[120px] lg:ml-[170px] md:pr-3 lg:pr-0 md:px-0 px-2'>
      <SearchForm />
      <div className='mt-10 md:mt-16 relative'>
        <h1 className='text-[50px] leading-[61px] md:text-[70px] md:leading-[81px]'>
          Happy reading, <br className='hidden md:block' /> Harvey
        </h1>
        <p className='md:w-1/2 mt-4'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eius odio ipsa assumenda quasi
          impedit, itaque velit sed adipisci vel ea cupiditate dolore voluptas nesciunt qui quod,
          labore, perferendis atque.
        </p>
        <img src='/book.png' alt='' className='relative -z-10 md:z-0 mt-5 md:mt-0 md:absolute lg:w-[650px] lg:top-[-50px] lg:right-[-364px] md:top-[110px] md:right-[-5px] md:w-[340px] md:pr-0 pr-4 ' />
        <button className=' -mt-10 mx-auto md:mx-0 z-20 bg-gray-700 text-gray-100 py-2 px-5 rounded-full md:mt-8 flex items-center gap-1 text-[14px]'>
          Start Reading
          <BsBoxArrowInUpRight className='h-4 w-4 text-white'/>
        </button>
      </div>
      <Populer />
    </div>
  );
}

const SearchForm = () => {
  return (
    <form className='flex h-10 mt-5'>
      <label htmlFor='voice-search' className='sr-only'>
        Search
      </label>
      <div className='relative w-full'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <BiSearch className='w-4 h-4 text-gray-700' />
        </div>
        <input
          type='text'
          id='voice-search'
          className='border-b-[1px] outline-none text-gray-900 bg-transparent text-sm focus:border-b-[1px] focus:border-gray-400/50 block w-full pl-10 p-2.5'
          placeholder='Search book name, author, edition...'
          required
        />
        <button type='button' className='absolute inset-y-0 right-0 flex items-center pr-3'>
          <BiX className='w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white' />
        </button>
      </div>
      <button
        type='submit'
        className='inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        <BiSearch className='w-4 h-4 mr-2' />
        Search
      </button>
    </form>
  );
};

const Populer = () => {
  return (
    <>
      <Heading />
      <div className='grid grid-cols-2 gap-4 px-3 md:grid-cols-3 lg:grid-cols-5 md:gap-8'>
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
      </div>
    </>
  );
};

const Heading = () => {
  return (
    <div className='mt-10 md:mt-[70px] flex justify-between mb-5'>
      <h2 className='text-[20px]'>Popular Now</h2>
      <PiDotsThreeOutlineLight className='h-8 w-8 text-gray-800 z-50' />
    </div>
  );
};

const BookCard = () => {
  return (
    <div>
      <div className='book-container'>
        <div className='content'>
          <img
            src='http://books.google.com/books/content?id=1hfMDQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
            alt='Dune'
          />
        </div>
      </div>
      <h2 className='mt-2 text-[18px]'>
        <b>The World of Ice</b>
      </h2>
      <h5 className='font-sans text-gray-500'>John smit</h5>
    </div>
  );
};

export default HomePage;
