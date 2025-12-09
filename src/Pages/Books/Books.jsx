import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => {
                setAllBooks(data);
            })
    }, [])
    return (
        <div>
            <h1 className='text-4xl font-bold text-center'>Books</h1>
            <div className='grid grid-cols-3 gap-8 mt-4'>
                {
                    allBooks.map(book => <Book book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;