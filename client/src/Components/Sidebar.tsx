import React, { useState } from 'react';
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
  const [hamburger, setHamburger] = useState<boolean>(false);

  const showHamburger = () => {
    setHamburger(!hamburger)
  }

  return (
    <>
      <div className={`flex bg-[#f0eee2] z-30 md:bg-transparent md:pt-0 flex-col justify-between h-screen md:h-[95vh] p-2 md:px-5 lg:px-8 pt-5 md:mt-5 items-center border-r-2 border-[#dcdace] fixed md:flex  ${!hamburger &&'hidden'}`}>
        <img src='/logo.png' alt='' width='40px' height='40px' className='mx-auto' />
        <div className='flex flex-col gap-5'>
          {NAV_MENU.map((menuItem, index) => (
            <div
              key={index}
              className={`rounded-full text-${index === 0 ? 'white' : 'gray-700 '
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
      <div className='rounded-full text-gray-800 bg-gray-200 h-[50px] w-[50px] flex justify-center items-center fixed bottom-[10px] left-[10px] md:hidden z-40' onClick={showHamburger}>
        <HiOutlineMenuAlt2 className='h-7 w-7' />
      </div>
    </>
  );
}

export default Sidebar;
