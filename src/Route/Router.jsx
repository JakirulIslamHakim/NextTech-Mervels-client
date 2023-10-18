import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Page/Home";

const Router = createBrowserRouter ([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    }
])

export default Router;