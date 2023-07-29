import React, { useEffect, useState } from 'react';
import { Books } from "../../Model/Book";
import { getBooks } from '../../Api/Requests';
import Heading from './Heading';
import { BookCard } from './BookCard';

const Popular: React.FC = () => {
    const [books, setBooks] = useState<Books>({ items: [], totalItems: 0 });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await getBooks();
            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }
            setBooks(response?.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

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