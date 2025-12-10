import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-base-200 max-h-min
        ">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <div className='w-1/2'>
                    <img
                        src="https://i.ibb.co.com/xS8YvxL/81m-CE-uclx-L-UF1000-1000-QL80.jpg"
                        className="max-w-sm  rounded-lg shadow-2xl"
                    />
                </div>
                <div sp>
                    <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>

                    <button className="btn font-bold text-white bg-[#23BE0A] mt-8">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;