import React from 'react';
import { RiNotification4Line } from 'react-icons/ri';
import { RightSidebarProps } from '../Model/Book';
import Heading from './Home/Heading';
import testimonial from '../testimonial.json'

const RightSidebar: React.FC<RightSidebarProps> = ({ searchResult, search, searchError }) => {
  return (
    <div className='p-2 bg-white pt-5 hidden lg:block w-[330px]'>
      <div className='items-start justify-between gap-16 bg-white lg:flex md:px-3'>
        <div className='flex gap-3'>
          <img src='/profile.jpg' alt='' className='w-[40px] overflow-hidden rounded-full border-2 border-gray-500/30' />
          <h2 className='mt-2 font-sans font-medium'>Harvey Mark</h2>
        </div>
        <RiNotification4Line className='h-6 w-6 text-gray-400 mt-2' />
      </div>
      <div className={`${search != '' && searchResult.items && searchResult?.totalItems !== 0 && !searchError ? 'mt-[30px]' : 'mt-[465px]'} z-50 sticky top-4 mx-3 `}>
        <Heading title='Users Review' />
        <div className='flex flex-col gap-4'>
          {
            testimonial?.map((t, index) => {
              return(
                <div className='flex gap-3' key={index}>
                  <img src="/profile.jpg" alt="" className='rounded-full w-10 h-10' />
                  <div>
                    <h4 className='text-[16px]'><b>{t.name}</b></h4>
                    <p className='text-[13px] mt-1 text-gray-500 w-[230px]'>{t.quot}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
