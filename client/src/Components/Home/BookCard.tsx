import React from "react";
import { Link } from 'react-router-dom';
import { Book } from "../../Model/Book";
export const BookCard: React.FC<{ book: Book }> = ({ book }) => {

    const author = book?.volumeInfo?.authors?.length > 0 ? book?.volumeInfo?.authors[0] : 'Unknown';

    return (
        <Link to={book?.volumeInfo?.previewLink} target="_blank" className="hover:-mt-3 transition-all">
            <div className='book-container'>
                <div className='content'>
                    <img
                        src={book?.volumeInfo?.imageLinks?.thumbnail}
                        alt={book?.volumeInfo?.title}
                    />
                </div>
            </div>
            <h2 className='mt-2 text-[16px] truncate text-ellipsis w-[173px]'>
                <b>{book?.volumeInfo?.title}</b>
            </h2>
            <h5 className='font-sans text-[13px] text-gray-500'>{author}</h5>
        </Link>
    );
};
