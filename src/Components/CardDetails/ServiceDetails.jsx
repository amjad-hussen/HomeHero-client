import React, { use, useRef } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const ServiceDetails = () => {
    const service = useLoaderData()
    const { user } = use(AuthContext)
    const { _id, serviceName, category, price, description, email, imageUrl, providerName } = service
    const bookRef = useRef()

    const isOwnService = user?.email === email;

    const handleBook = () => {
        bookRef.current.showModal()
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const email = user.email;
        const price = e.target.price.value;
        const date = new Date()

        const newBook = {
            email,
            price,
            date,
            serviceId: _id

        }

        fetch('http://localhost:3000/book', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
            .then(res => res.json())
            .then(data => {
                if (data.exists) {
                    toast.error(" You already booked this service!");
                    e.target.reset()
                    bookRef.current.close();
                    return;
                }
                if (data.insertedId) {
                    e.target.reset()
                    bookRef.current.close();
                    toast.success('This Serviced Booked Successfully')
                }
            })
            .catch(error => {
                toast.error(error.message)
            })

        bookRef.current.close()
    }

    return (
        <div className='w-11/12 mx-auto'>
            <div className='border border-orange-600 shadow-2xl my-16  flex-col md:flex-row  flex gap-5 rounded-xl'>
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
                        {isOwnService ?
                            <button disabled className='btn shadow-2xl bg-orange-500 text-white font-bold hover:bg-orange-600  rounded-md px-10 py-3 '>Your Own Service</button>

                            :
                            <Link onClick={handleBook} className='btn shadow-2xl bg-orange-500 text-white font-bold hover:bg-orange-600  rounded-md px-10 py-3 '>Book Now</Link>
                        }


                        <Link to={'/allService'} className='btn shadow-2xl border-2 border-orange-600  text-orange-600 font-bold rounded-md hover:bg-orange-600 hover:text-white px-10 py-3 '>All Services</Link>
                    </div>


                </div>


                {/* modal */}

                <dialog ref={bookRef} className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box w-full max-w-md">
                        <h3 className="font-bold text-4xl mb-4 text-center border-b border-gray-200 pb-2">
                            Book This <span className="text-orange-600">Service!</span>
                        </h3>

                        <h1 className='font-semibold text-xl  mt-2 '>Service Name: <span className='font-bold'>{serviceName}</span></h1>

                        <p className=' mt-1 font-semibold text-orange-600'>Email: <span className='font-bold'>{email}</span></p>

                        <div className='flex gap-10'>
                            <p className=' mt-1 font-semibold '>Price: <span className='font-bold'>{price}</span></p>

                            <p className=' mt-1 font-semibold '>Category: <span className='font-bold'>{category}</span></p>
                        </div>




                        <form onSubmit={handleSubmit} className=" space-y-2 my-5 ">


                            <label className="label text-sm font-medium">Email</label>
                            <input type="email" name="email" readOnly defaultValue={user.email} placeholder="Enter your email" className="input input-bordered input-sm w-full focus:border-0" />



                            <label className="label text-sm font-medium">Price</label>
                            <input type="number" required name="price" placeholder="Enter photo price" className="input input-bordered input-sm w-full focus:border-0" />

                            <input className="btn bg-orange-500 hover:bg-orange-600 w-full normal-case text-white font-bold py-2 mt-5" type="submit" value="Book Now" />



                        </form>
                    </div>
                </dialog>

            </div>
        </div>
    );
};

export default ServiceDetails;