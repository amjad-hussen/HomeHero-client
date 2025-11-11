import React from 'react';
import { Link, useLoaderData } from 'react-router';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { serviceName, category, price, description, email, imageUrl, providerName } = service
    return (
        <div className='w-11/12 mx-auto'>
            <div className='border border-orange-600 shadow-2xl my-10  flex-col md:flex-row  flex gap-5 rounded-xl'>
                <div>
                    <img className='w-full h-60 md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[350px] md:m-5 p-5 md:p-0 shadow-xl object-cover rounded-xl ' src={imageUrl} alt="" />
                </div>
                <div className='p-5 flex-1'>
                    <button className='py-2 px-4 border-2 border-orange-600 text-orange-600 font-semibold rounded-md'>{category}</button>

                    <h1 className='font-bold text-xl md:text-2xl lg:text-3xl mt-2 '>{serviceName}</h1>

                    <p className='mt-3'> <span className='font-bold'>Description : </span>{description}</p>

                    <p className='text-xl mt-4 font-semibold'>Provider Name: <span className='font-bold'>{providerName}</span></p>
                    <p className='text-xl mt-1 font-semibold'>Email: <span className='font-bold'>{email}</span></p>
                    <p className='text-xl mt-1 font-semibold'>Price: <span className='font-bold'>${price}</span></p>

                    <div className='mt-4 flex gap-3 '>
                        <Link className='btn shadow-2xl bg-orange-500 text-white font-bold hover:bg-orange-600  rounded-md px-10 py-3 '>Book Now</Link>

                        <Link to={'/allService'} className='btn shadow-2xl border-2 border-orange-600  text-orange-600 font-bold rounded-md hover:bg-orange-600 hover:text-white px-10 py-3 '>All Services</Link>
                    </div>
                

                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;