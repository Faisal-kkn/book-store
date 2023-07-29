import React from "react";
import { Link } from 'react-router-dom';
import { VolumeInfo } from '../../Model/Book';

interface BookCardProps {
    book: VolumeInfo;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {

    const author = book?.authors?.length > 0 ? book?.authors[0] : 'Unknown';

    return (
        <Link to={book?.previewLink} target="_blank" className="hover:-mt-3 transition-all">
            <div className='book-container'>
                <div className='content'>
                    <img
                        src={book?.imageLinks?.thumbnail}
                        alt={book?.title}
                    />
                </div>
            </div>
            <h2 className='mt-2 text-[16px] truncate text-ellipsis w-[173px]'>
                <b>{book?.title}</b>
            </h2>
            <h5 className='font-sans text-[13px] text-gray-500'>{author}</h5>
        </Link>
    );
};
