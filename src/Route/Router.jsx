import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home";
import Login from "../Components/Login/Login";
import Singup from "../Components/SIngup/Singup";
import AddProduct from "../Components/AddProduct/AddProduct";
import Products from "../Components/Products/Products";
import Details from "../Components/Details/Details";

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
                path:'/addProduct',
                element:<AddProduct></AddProduct>
            },
            {
                path:'/products/:brand',
                element:<Products></Products>,
                loader:({params})=> fetch(`http://localhost:5000/products/${params.brand}`)
            },
            {
                path:'/product/:id',
                element:<Details></Details>,
                loader:({params}) => fetch(`http://localhost:5000/product/${params.id}`)
            }
        ]
    }
])

export default Router;