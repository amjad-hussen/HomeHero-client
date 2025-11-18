import React from 'react';
import errorImg from '../../assets/404.jpg'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='w-11/12 mx-auto my-16'>
            <div
                className="relative w-full h-96 md:h-[500px] lg:h-[600px] bg-cover bg-center rounded-xl shadow-lg"
                style={{
                    backgroundImage: `url(${errorImg})`
                }}
            >
                <Link to={"/"}  className="absolute bottom-6 right-3 transform -translate-x-1/2  md:bottom-10 bg-orange-500 text-white font-bold px-5 py-3 rounded-lg shadow hover:bg-orange-600 transition duration-300">
                    Back To Home
                </Link>
            </div>

        </div>
    );
};

export default Error;