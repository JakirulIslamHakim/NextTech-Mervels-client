import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <div className="text-center"><span className="loading loading-spinner loading-lg my-36 text-5xl "></span></div>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'} replace={true}></Navigate>
};

export default PrivateRoute;