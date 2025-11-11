import React, { use, useState } from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import '../../App.css'
import { AuthContext } from '../../context/AuthContext';
import ppicon from '../../assets/ppicon.png'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { user, signOutUser } = use(AuthContext)

    const links = <>
        <li> <NavLink to={"/"}> Home</NavLink></li>
        <li> <NavLink to={"/allService"}> Services</NavLink></li>
        {
            user && <>
                <li> <NavLink to={"/myServices"}> My Services</NavLink></li>
                <li> <NavLink to={"/addService"}>Add Service</NavLink></li>
                <li> <NavLink to={"/myBooking"}>My Bookings</NavLink></li>
                <li> <NavLink to={"/profile"}>Profile</NavLink></li>
            </>
        }
    </>


    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log('SignOut successfully')
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleViewProfile = () => {
        setOpen(false);
        // navigate("/profile")
    }

    return (

        <div className="navbar bg-base-300 shadow-sm">
            <div className="navbar-start pl-8 ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={"/"}><img className=' h-10 w-22' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end pr-8">
                {
                    user ?
                        <div className="relative">
                            <img onClick={() => setOpen(!open)} className='w-10 h-10 rounded-full overflow-hidden cursor-pointer border-2 border-orange-600 p-[1px]' src={ppicon} alt="Profile" />
                            {
                                open &&
                                <div className='absolute right-0 mt-2 w-40 bg-white border shadow-md rounded-md z-50'>
                                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-200 font-semibold">View Profile</button>
                                    <button onClick={handleSignOut} className="block w-full text-left px-4 py-2 hover:bg-gray-200 text-red-600 font-semibold">Log Out</button>

                                </div>
                            }
                        </div>
                        :
                        <div className='flex gap-2'>
                            <Link to={"/login"} className="btn bg-orange-500 hover:bg-orange-600 text-white font-bold">Login</Link>
                            <Link to={"/register"} className="btn border-2 border-orange-600   font-bold">Register</Link>
                        </div>




                }
            </div>
        </div>
    );
};

export default Navbar;


{/* <Link onClick={handleSignOut} className="btn bg-orange-500 hover:bg-orange-600 text-white font-bold">Log Out</Link> :
<Link to={"/login"} className="btn bg-orange-500 hover:bg-orange-600 text-white font-bold">Login</Link> */}