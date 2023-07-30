import React, { useEffect, useState } from 'react';
import { Books } from "../../Model/Book";
import { getApi } from '../../Api/Requests';
import Heading from './Heading';
import { BookCard } from './BookCard';

const Popular: React.FC = () => {
    const [books, setBooks] = useState<Books>({ items: [], totalItems: 0 });

    useEffect(() => {
        getApi('/fetch-books').then((res: any) => {
            setBooks(res);
        }).catch(err => {
            console.error('Error fetching data:', err);
        })
    }, [])

    return (
        <>
            <Heading title={'Popular Now'} />
            <div className='grid grid-cols-2 gap-4 md:px-0 md:grid-cols-3 lg:grid-cols-5 md:gap-8 pb-5'>
                {books?.items?.map(book => (
                    <BookCard key={book.id} book={book.volumeInfo} />
                ))}
            </div>
        </>
    );
};


export default Popular