import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDb } from '../../Utility/addToDb';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePeople } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";

const BookDetails = () => {
    const { id } = useParams();

    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId == id);
    const { image, bookName, author, rating, category, tags, yearOfPublishing, publisher, totalPages, review } = singleBook;
    const handleAddToRead = () => {
        addToStoredDb(id)
    }

    return (
        <div className='grid grid-cols-2 gap-8 items-center border border-gray-300 p-8 rounded-lg mt-6'>
            <div className='rounded-lg bg-[#1313130D]'>
                <img className=' p-6' src={image} alt="" />
            </div>
            <div className='space-y-4'>
                <h1 className='font-bold text-2xl'>{bookName}</h1>
                <h3 className='text-gray-500'>By: {author}</h3>
                <hr className='border-t border-dashed border-[1px] border-[#13131326] my-2' />
                <h3 className='font-bold text-xl'>{category}</h3>
                <hr className='border-t border-dashed border-[1px] border-[#13131326] my-2' />
                <p><span className='font-bold'>Review:</span>{review}</p>
                <div className='flex items-center gap-6'>
                    <h3 className='font-bold'>Tags</h3>
                    {
                        tags.map(tag => <button className='btn text-[#23BE0AFF]'>#{tag}</button>)
                    }
                </div>
                <div className='space-y-4'>
                    <h3><span className='text-gray-400 mr-12'>Number of Pages:</span>{totalPages}</h3>
                    <h3><span className='text-gray-400 mr-26'>Publisher:</span>{publisher}</h3>
                    <h3><span className='text-gray-400 mr-10'>Year of Publishing:</span>{yearOfPublishing}</h3>
                    <h3><span className='text-gray-400 mr-28'>Rating: </span>{rating}</h3>
                </div>
                <hr className='border-t mb-6 border-dashed border-[1px] border-[#13131326] my-2' />
                <div className='space-x-4'>
                    <button onClick={handleAddToRead} className="btn  btn-outline">Mark As Read</button>
                    <button className="btn bg-[#50B1C9] font-bold text-white">Add To WishList</button>
                </div>
            </div>
        </div>
        // <div>
        //     <img className='h-48' src={image} alt="" />
        //     <h1>{bookName}</h1>
        //     <button onClick={handleAddToRead} className="btn">Mark As Read</button>
        //     <button className="btn">Add To WishList</button>
        // </div>
    );
};

export default BookDetails;