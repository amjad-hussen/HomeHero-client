import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
    const { user } = use(AuthContext)
    console.log(user)
    return (
        <div className='w-11/12 mx-auto'>


            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-16 mx-auto border border-orange-200">
                <div className="card-body ">

                    <img className='w-40 h-40 mx-auto' src={user.photoURL} alt="" />
                    <h1  className='text-3xl font-bold text-center text-gray-800'>{user.displayName}</h1>
                    <p className="text-gray-800 mt-1 text-center">Email: {user.email}</p>
                    <p className='text-gray-800 text-center '>
                        Last Login: {new Date(user.metadata.lastSignInTime).toLocaleString()}
                    </p>

                    
                       
                        
                        <button className="btn bg-orange-500 hover:bg-orange-600 text-white mt-4 font-bold">Update Profile</button>
                    
                </div>
            </div>
        </div>
            
    );
};

export default Profile;


{/* <div className=' border border-gray-200 shadow-2xl mx-auto flex-shrink-0 mx-auto'>
                <img className="w-32 h-32 p-1 rounded-full border-4 border-orange-500 object-cover" src={user.photoURL} alt="" />
                <div className='flex-1 text-center md:text-left'>
                    <h1 className='text-3xl font-bold text-gray-800'>{user.displayName}</h1>
                    <p className="text-gray-600 mt-1">{user.email}</p>
                    <p className='text-gray-500 mt-2'>
                        Last Login: {new Date(user.metadata.lastSignInTime).toLocaleString()}
                    </p>
                </div>
            </div> */}