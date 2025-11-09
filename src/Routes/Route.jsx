import { createBrowserRouter } from "react-router";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home/Home";
import Service from "../Pages/Service/Service";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


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
            path:'/service',
            Component:Service
        },
        {
            path:'/login',
            Component: Login
        },
        {
            path:'/register',
            Component: Register
        }

    ]
  },
]);