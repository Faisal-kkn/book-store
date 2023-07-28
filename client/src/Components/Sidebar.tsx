import React from 'react';
import { BiHomeAlt2 } from 'react-icons/bi';
import { BsJournalBookmark, BsCompass } from 'react-icons/bs';
import { TfiSaveAlt } from 'react-icons/tfi';
import { IoSettingsOutline } from 'react-icons/io5';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';

const NAV_MENU = [
  { icon: BiHomeAlt2, color: 'bg-[#b573f7]' },
  { icon: BsJournalBookmark, color: 'bg-transparent' },
  { icon: BsCompass, color: 'bg-transparent' },
  { icon: TfiSaveAlt, color: 'bg-transparent' },
  { icon: IoSettingsOutline, color: 'bg-transparent' },
];

function Sidebar() {
  return (
    <div className='flex flex-col justify-between h-[95vh] p-2 md:px-8 pt-0 mt-5 items-center border-r-2 border-[#dcdace] fixed'>
      <img src='/logo.png' alt='' width='40px' height='40px' className='mx-auto' />
      <div className='flex flex-col gap-5'>
        {NAV_MENU.map((menuItem, index) => (
          <div
            key={index}
            className={`rounded-full text-${
              index === 0 ? 'white' : 'gray-700 '
            } ${menuItem?.color} h-[50px] w-[50px] flex justify-center items-center`}
          >
            {React.createElement(menuItem.icon, { className: 'h-7 w-7' })}
          </div>
        ))}
      </div>
      <div className='rounded-full text-gray-800 bg-gray-200/50 h-[50px] w-[50px] flex justify-center items-center'>
        <HiOutlineMenuAlt2 className='h-7 w-7' />
      </div>
    </div>
  );
}

export default Sidebar;
