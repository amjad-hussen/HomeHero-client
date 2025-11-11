import React, { use } from 'react';

const Features = ({ featuresPromise }) => {
    const features = use(featuresPromise)
    return (
        <div className=" mx-auto py-16">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold ">Why Choose <span className='text-orange-600'>HomeHero?</span></h2>
                <p className="text-gray-600 mt-3">Trusted Local Service Providers at Your Fingertips</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    features.map(feature => (
                        <div className="card w-full shadow-sm border border-orange-600 rounded-md">
                            <figure className="px-10 pt-5">
                                <img
                                    src={feature.icon}
                                    alt="Icon"
                                    className="rounded-xl w-40 h-40 " />
                            </figure>
                            <div className="card-body pt-5 items-center text-center">
                                <h2 className="card-title font-bold text-3xl ">{feature.title}</h2>
                                <p className='font-semibold text-gray-600'>{feature.description}</p>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    );
};

export default Features;


