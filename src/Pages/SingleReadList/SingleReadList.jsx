import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePeople } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";


const SingleReadList = ({ book }) => {
    const { image, bookName, author, rating, category, tags, yearOfPublishing, publisher, totalPages } = book;
    return (
        <div className='flex gap-8 items-center border border-gray-300 p-8 rounded-lg mt-6'>
            <div className='rounded-lg bg-[#1313130D]'>
                <img className='h-56 p-6 ' src={image} alt="" />
            </div>
            <div className='space-y-4'>
                <h1 className='font-bold text-2xl'>{bookName}</h1>
                <h3 className='text-gray-500'>By: {author}</h3>
                <div className='flex items-center gap-6'>
                    <h3>Tags</h3>
                    {
                        tags.map(tag => <button className='btn text-[#23BE0AFF]'>#{tag}</button>)
                    }
                    <h3 className='flex items-center gap-2'><CiLocationOn /> Year Of Publishing: {yearOfPublishing}</h3>
                </div>
                <div className='flex items-center gap-6'>
                    <h4 className='flex items-center gap-2'><MdOutlinePeople /> Publisher: {publisher}</h4>
                    <h4 className='flex items-center gap-2'><MdMenuBook /> Pages: {totalPages}</h4>
                </div>
                <hr className='border-t border-dashed border-[1px] border-[#13131326] my-2' />
                <div className='space-x-4'>
                    <button className='btn bg-[#328EFF26] text-[#328EFFFF] rounded-lg'>Category: {category}</button>
                    <button className='btn rounded-lg text-[#FFAC33FF] bg-[#FFAC3326]'>Rating: {rating}</button>
                    <button className='btn rounded-lg bg-[#23BE0A] text-white'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default SingleReadList;