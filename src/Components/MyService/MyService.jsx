import { useEffect, useState } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";


const MyService = ({ service }) => {

    const [myService, setMyService] = useState([])

    useEffect(() => {
        setMyService(service || []);
    }, [service]);

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


                fetch(`http://localhost:3000/allService/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your service has been deleted.",
                                icon: "success"
                            });
                        }
                    })

                    const remainingService = myService.filter(service => service._id !==_id) 
                    setMyService(remainingService)


            }
        });


    }

    


    return (
        <div className='w-11/12 mx-auto'>

            <h1 className="text-3xl font-black text-orange-500 mb-5">My All Service: {myService.length}</h1>
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
                            myService.map((card, index) => <tr key={card._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={card.imageUrl}
                                                    alt="Service Name" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{card.serviceName}</div>
                                            <div className="text-sm ">{card.category}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {card.providerName}

                                </td>
                                <td> $ {card.price}</td>
                                <th className='flex gap-3'>

                                    <Link to={`/updateService/${card._id}`}  className="btn border-2 border-orange-600 text-orange-600 hover:bg-orange-500 hover:text-white font-bold ">Update</Link>
                                    
                                    <button onClick={() => handleDelete(card._id)} className="btn bg-orange-500 hover:bg-orange-600 text-white font-bold ">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyService;