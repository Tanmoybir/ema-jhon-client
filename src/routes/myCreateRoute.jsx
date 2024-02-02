import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Details from "../pages/Details/Details";
import PrivateRoute from "./privateRoute";
import AddCart from "../pages/AddCart/AddCart";

const myCreateRoute = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path:'/details/:id',
                element: <PrivateRoute><Details/></PrivateRoute>              
            },
            {
                path: '/addCart',
                element: <AddCart/>
            }
        ]
    },
    {
        path:'/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
])

export default myCreateRoute;