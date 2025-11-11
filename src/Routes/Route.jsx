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
import PrivateRoute from "./PrivateRoute";


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
            element: <PrivateRoute><MyServices></MyServices></PrivateRoute>
        },
        {
            path: '/addService',
            element:<PrivateRoute> <AddService></AddService></PrivateRoute>
        },
        {
            path:'/myBooking',
            element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>
        },
        {
            path: '/profile',
            element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
            path: '/serviceDetails/:id',
            loader: ({params})=> fetch(`http://localhost:3000/service/${params.id}`),
            element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
        }

    ]
  },
]);