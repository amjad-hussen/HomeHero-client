import React, { use, useState } from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const bookPromise = fetch('http://localhost:3000/book').then(res => res.json())
const MyBooking = () => {
    const books = use(bookPromise)
    const [booked, setBooked] = useState(books)


    const handleDelete = (_id) => {


        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:3000/book/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('deleted', data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Booling has been deleted.",
                                icon: "success"
                            });
                        }
                    })

                const remainingService = booked.filter(book => book._id !== _id)
                setBooked(remainingService)


            }
        });


    }

    return (
        <div className='w-11/12 mx-auto py-16'>

            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold ">My Booked <span className='text-orange-600'> Services</span></h2>
                <p className=" mt-3">View all your booked services and their details in one place.</p>
            </div>

            <h1 className="text-3xl font-black text-orange-500 mb-5">Total Booked: {booked.length}</h1>
            <div className="overflow-x-auto rounded-xl border border-orange-200 ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="px-4 py-2">
                                <p>My Service</p>
                            </th>
                            <th className="px-4 py-2">Service Info</th>
                            <th className="px-4 py-2">Provider Name</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            booked.map((book, index) => <tr key={book._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={book.imageUrl}
                                                    alt="Service Name" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{book.serviceName}</div>
                                            <div className="text-sm ">{book.category}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {book.providerName}

                                </td>
                                <td> $ {book.price}</td>
                                <th className='flex gap-3'>

                                    <Link to={`/review/${book.serviceId}`}>
                                        <button className="btn bg-green-500 hover:bg-green-600 text-white font-bold">
                                         Review
                                        </button>
                                    </Link>

                                    <button onClick={() => handleDelete(book._id)} className="btn bg-orange-500 hover:bg-orange-600 text-white font-bold ">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBooking;