import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home";
import Login from "../Components/Login/Login";
import Singup from "../Components/SIngup/Singup";
import AddProduct from "../Components/AddProduct/AddProduct";

const Router = createBrowserRouter ([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/singup',
                element:<Singup></Singup>
            },
            {
                path:'addProduct',
                element:<AddProduct></AddProduct>
            }
        ]
    }
])

export default Router;