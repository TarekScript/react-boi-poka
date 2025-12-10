import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../Utility/addToDb';
import Book from '../Book/Book';
import SingleReadList from '../SingleReadList/SingleReadList';

const ReadList = () => {
    const [myReadList, setMyReadList] = useState([]);
    const [sort, setSort] = useState('');
    const booksData = useLoaderData();
    useEffect(() => {
        const storedData = getStoredBook();
        const storedDataInt = storedData.map(data => parseInt(data));
        const myNewReadList = booksData.filter(book => storedDataInt.includes(book.bookId));
        setMyReadList(myNewReadList)
    }, [])
    const handleSort = (type) => {
        setSort(type);
        if (type == "Pages") {
            const sortByPages = [...booksData].sort((a, b) => a.totalPages - b.totalPages);
            setMyReadList(sortByPages)
        }
        else if (type == "Ratings") {
            const sortByRatings = [...booksData].sort((a, b) => b.rating - a.rating);
            setMyReadList(sortByRatings)
        }
    }

    return (
        <div className='max-w-7xl mx-auto'>
            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">Sort By : {sort ? sort : ''}</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort('Pages')}>Pages</a></li>
                    <li><a onClick={() => handleSort('Ratings')}>Ratings</a></li>
                </ul>
            </div>
            <Tabs>
                <TabList>
                    <Tab>ReadList</Tab>
                    <Tab>WishList</Tab>
                </TabList>

                <TabPanel>
                    {myReadList.map(book => <SingleReadList book={book}></SingleReadList>)}
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>

                </TabPanel>
            </Tabs>
        </div >
    );
};

export default ReadList;