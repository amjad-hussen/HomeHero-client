import React, { use } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router';

const Service = ({serivePromise}) => {
    const services = use(serivePromise)
    return (
        <div className='pt-16'>
            <h1 className='text-center font-bold text-3xl md:text-4xl '>Our <span className='text-orange-600'>Service</span></h1>
            <p className=" mt-3 text-center">Explore a wide range of trusted local services, from plumbing and electrical work to home cleaning, all at your fingertips.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='flex justify-center mb-5'>
                <Link to={"/AllService"} className='btn bg-orange-500 text-white font-bold hover:bg-orange-600 shadow-xl rounded-md px-10 py-3 '>All Service</Link>
            </div>
        </div>
    );
};

export default Service;