import React, { use } from 'react';
import ServiceCard from '../../Components/HomeLayout/ServiceCard';


const allServicepromise = fetch('http://localhost:3000/allService').then(res => res.json())

const AllService = () => {
    const allService = use(allServicepromise)
    
    return (
        <div className='pt-16 w-11/12 mx-auto'>
            <h1 className='text-center font-bold text-3xl md:text-4xl '>Our All <span className='text-orange-600'>Service</span></h1>
            <p className=" mt-3 text-center">Explore a wide range of trusted local services, from plumbing and electrical work to home cleaning, all at your fingertips.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10 w-full'>
                {
                    allService.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default AllService;