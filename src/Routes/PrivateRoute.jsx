import React, {use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)
    if(loading){
        return <span className="loading loading-ring loading-xl"></span>
    }
    if(user){
        return children
    }
    return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoute;