import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ book }) => {
    const { image, bookName, author, rating, category, tags, bookId } = book;
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 shadow-sm p-4 border border-gray-300">
                <figure className="px-10 pt-10 bg-[#F3F3F3FF] p-2 rounded-lg">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl h-48" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-4'>
                        {
                            tags.map(tag => <button className='btn text-[#23BE0AFF]'>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title text-2xl">{bookName}</h2>
                    <p className='text-xl'>By : {author}</p>
                    <hr className='border-t border-dashed border-[1px] border-[#13131326] my-2' />
                    <div className="grid grid-cols-2 justify-around">
                        <h3>{category}</h3>
                        <h3 className='flex items-center gap-2'>{rating}<FaRegStar />
                        </h3>
                    </div>
                </div>
            </div></Link>
    );
};

export default Book;