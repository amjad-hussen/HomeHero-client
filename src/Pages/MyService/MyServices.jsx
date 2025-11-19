import React, { use, useEffect, useState } from 'react';
import MyService from '../../Components/MyService/MyService';
import { AuthContext } from '../../context/AuthContext';
import { useLocation } from 'react-router';



const MyServices = () => {
    const {user} = use(AuthContext)
    const [service, setService] = useState([])
    const location = useLocation()
    
    useEffect( () => {
        if(user?.email) {
            fetch(`https://homehero-server-nine.vercel.app/allService?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setService(data)
            })
        }

    }, [user?.email , location.pathname])

    return (
        <div className='mx-auto py-16'>
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold ">My Listed <span className='text-orange-600'> Services</span></h2>
                <p className=" mt-3 text-center px-3">Manage all your services here. Edit or remove any service as needed.</p>
            </div>

            <MyService service ={service}></MyService>
        </div>
    );
};

export default MyServices;