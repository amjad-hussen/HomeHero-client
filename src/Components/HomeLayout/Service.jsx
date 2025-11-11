import React, { use } from 'react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router';

const Service = ({serivePromise}) => {
    const services = use(serivePromise)
    console.log(services)
    return (
        <div className='mt-10'>
            <h1 className='text-center font-bold text-2xl md:text-4xl lg:text-6xl '>Our <span className='text-orange-600'>Service</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='flex justify-center mb-5'>
                <Link to={"/AllService"} className='btn bg-orange-500 text-white font-bold hover:bg-orange-600  rounded-md px-10 py-3 '>All Service</Link>
            </div>
        </div>
    );
};

export default Service;