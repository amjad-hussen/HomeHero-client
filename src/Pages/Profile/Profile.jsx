import React, { use, useRef, } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Link, } from 'react-router';
import UpdateUser from './UpdateUser';

const Profile = () => {
    const { user } = use(AuthContext)
    const updateRef = useRef(null)



    const handleOpenModal = () => {
        updateRef.current.showModal()
    }



    return (
        <div className='w-11/12 mx-auto'>


            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-16 mx-auto border border-orange-200">
                <div className="card-body ">

                    <img className='w-30 h-30 mx-auto rounded-full overflow-hidden border-2 border-orange-600 p-1' src={user.photoURL} alt="" />
                    <h1 className='text-3xl font-bold text-center text-gray-800'>{user.displayName}</h1>
                    <p className="text-gray-800 mt-1 text-center">Email: {user.email}</p>
                    <p className='text-gray-800 text-center '>
                        Last Login: {new Date(user.metadata.lastSignInTime).toLocaleString()}
                    </p>




                    <Link  onClick={handleOpenModal} className="btn bg-orange-500 hover:bg-orange-600 text-white mt-4 font-bold">Update Profile</Link>

                    {/* modals */}

                    <UpdateUser updateRef={updateRef} />





                </div>
            </div>
        </div>

    );
};

export default Profile;


