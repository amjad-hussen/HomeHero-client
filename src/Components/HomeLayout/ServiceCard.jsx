import React from 'react';
import { Link } from 'react-router';

const ServiceCard = ({ service }) => {
    const {imageUrl, serviceName, category, price, _id} =service
    return (
        <div className="card bg-base-100 w-full md:w-96 shadow-lg border border-orange-200">
            <figure className="p-5">
                <img
                    src={imageUrl}
                    alt="Servixe"
                    className="rounded-xl  w-full h-60 md:h-64 lg:h-72 object-cover" />
            </figure>
            <div className="card-body pt-0  ">
                <h2 className="card-title font-bold text-xl md:text-2xl  ">{serviceName}</h2>
                
                <div className='flex justify-between font-semibold'>
                    <h2>Category: {category}</h2>
                    <h2> Price: {price}</h2>
                </div>
                <Link to={`/serviceDetails/${_id}`} className="btn w-full border-2 font-bold border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white mt-4">Show Details</Link>
            </div>
        </div>
    );
};

export default ServiceCard;