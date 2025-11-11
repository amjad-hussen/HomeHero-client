import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Service from "../Components/HomeLayout/Service";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyServices from "../Pages/MyService/MyServices";
import AddService from "../Pages/AddService/AddService";
import MyBooking from "../Pages/MyBooking/MyBooking";
import Profile from "../Pages/Profile/Profile";
import AllService from "../Pages/AllService/AllService";
import ServiceDetails from "../Components/CardDetails/ServiceDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index:true,
            Component:Home
        },
        {
            path:'/allService',
            Component:AllService
        },
        {
            path:'/login',
            Component: Login
        },
        {
            path:'/register',
            Component: Register
        },
        {
            path:'/myServices',
            element: <MyServices></MyServices>
        },
        {
            path: '/addService',
            element: <AddService></AddService>
        },
        {
            path:'/myBooking',
            element: <MyBooking></MyBooking>
        },
        {
            path: '/profile',
            element:<Profile></Profile>
        },
        {
            path: '/serviceDetails/:id',
            Component: ServiceDetails
        }

    ]
  },
]);