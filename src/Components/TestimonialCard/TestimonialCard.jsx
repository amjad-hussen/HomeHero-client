import React from 'react';

const TestimonialCard = () => {
    return (
        <div className=" mx-auto py-16">
             <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold ">What Our  <span className='text-orange-600'>Customers</span> Say</h2>
                <p className="text-gray-600 mt-3">Hear from our satisfied users who have experienced reliable and professional services with HomeHero.</p>
            </div>
            <div className='w-full border border-orange-600 shadow-2xl rounded-2xl p-10'>
                <h1 className='text-gray-600 text-xl text-justify'> " HomeHero connected me with a trustworthy electrician in no time. The service was incredibly professional, fast, and reliable. From the moment I booked the appointment, everything was smooth and hassle-free. The electrician arrived on time, handled the job efficiently, and even offered helpful tips to prevent future issues. I truly felt supported and confident in the quality of service provided, making the whole experience completely stress-free and satisfying."</h1>

                <div className='mt-8 pl-10 flex items-center gap-3'>
                    <img className="w-24 h-24 rounded-full object-cover mb-4 shadow-md" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Jane Smith" />
                    <div>
                        <h3 className="text-2xl font-bold">Jane Smith</h3>
                        <p className="text-gray-500 text-sm mb-2">Homeowner</p>
                    </div>
                </div>
            </div>
        </div>





        // <div className="max-w-sm mx-auto bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center">
        //     <img
        //         src="https://randomuser.me/api/portraits/women/44.jpg"
        //         alt="Jane Smith"
        //         className="w-24 h-24 rounded-full object-cover mb-4 shadow-md"
        //     />
        //     <h3 className="text-xl font-bold">Jane Smith</h3>
        //     <p className="text-gray-500 text-sm mb-2">Homeowner</p>
        //     <div className="flex mb-3">
        //         <span className="text-yellow-400 text-lg">⭐</span>
        //         <span className="text-yellow-400 text-lg">⭐</span>
        //         <span className="text-yellow-400 text-lg">⭐</span>
        //         <span className="text-yellow-400 text-lg">⭐</span>
        //         <span className="text-yellow-400 text-lg">⭐</span>
        //     </div>
        //     <p className="text-gray-700">
        //         HomeHero connected me with a trustworthy electrician in no time. The service was professional, fast, and reliable!
        //     </p>
        // </div>
    );
};

export default TestimonialCard;