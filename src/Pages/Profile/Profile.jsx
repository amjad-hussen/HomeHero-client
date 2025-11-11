import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';

const Profile = () => {
    const {user} = use(AuthContext)
    console.log(user)
    return (
        <div className='w-11/12 mx-auto'>
            <div>
                <img src={user.photoURL} alt="" />
                <h1>{user.displayName}</h1>
                <p>{user.email}</p>
            </div>
        </div>
    );
};

export default Profile;