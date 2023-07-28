import React from 'react';
import { RiNotification4Line } from 'react-icons/ri';
function RightSidebar() {
  return (
    <div className='p-2 md:px-8 items-start justify-center gap-16 bg-white pt-5 hidden lg:flex'>
      <div className='flex gap-3'>
        <img
          src='/profile.jpg'
          alt=''
          className='w-[40px] overflow-hidden rounded-full border-2 border-gray-500/30'
        />
        <h2 className='mt-2 font-sans font-medium'>Harvey Mark</h2>
      </div>
      <RiNotification4Line className='h-6 w-6 text-gray-400 mt-2' />
    </div>
  );
}

export default RightSidebar;
