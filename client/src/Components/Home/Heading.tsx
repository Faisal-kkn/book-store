import React from 'react'
import { HeadingProps } from "../../Model/Book";
import { PiDotsThreeOutlineLight } from 'react-icons/pi';

export const Heading: React.FC<HeadingProps> = ({ title }) => {
    return (
        <div className='mt-10 md:mt-[30px] flex justify-between mb-5'>
            <h2 className='text-[20px]'>{title}</h2>
            <PiDotsThreeOutlineLight className='h-8 w-8 text-gray-800 z-50' />
        </div>
    );
};