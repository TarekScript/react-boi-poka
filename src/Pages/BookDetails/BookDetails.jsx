import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDb } from '../../Utility/addToDb';

const BookDetails = () => {
    const { id } = useParams();

    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId == id);
    const { image, bookName } = singleBook;
    const handleAddToRead = () => {
        addToStoredDb(id)
    }

    return (
        <div>
            <img className='h-48' src={image} alt="" />
            <h1>{bookName}</h1>
            <button onClick={handleAddToRead} className="btn">Mark As Read</button>
            <button className="btn">Add To WishList</button>
        </div>
    );
};

export default BookDetails;