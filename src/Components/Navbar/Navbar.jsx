import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";



const Navbar = () => {
    const [showDetail,setShowDetail] = useState(false);
    // console.log(showDetail);

    const { LogOut, user } = useContext(AuthContext);

    const handleSingOut = () => {
        LogOut()
            .then(() => {
                console.log('succesfully logout');
            })
            .then(err => console.log(err))
    }

    const navlink = <>
        <li className="font-bold text-base"><NavLink to={'/'}>Home</NavLink></li>
        <li className="font-bold text-base"><NavLink to={'/addProduct'}>Add Product </NavLink></li>
        <li className="font-bold text-base"><NavLink to={'/myCart'}>My Cart</NavLink></li>
    </>

    return (

        <div className="navbar p-0 bg-base-100 mt-3 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div className=" m-2">
                        <label tabIndex={0} className=" lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 md:text-2xl bg-gra-500 font-bold text-white">NexTech Marvels</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div>
                            <div className="relative">
                                <img onClick={()=> setShowDetail(!showDetail)} className="w-14 cursor-pointer" src={'https://i.ibb.co/hmGjdtS/user.png'} alt="" />
                                <div className={`bg-gray-500 rounded-xl absolute right-6 p-5 space-y-2 ${showDetail ? '' : 'hidden'}`}>
                                    <h2 className="text-xl font-bold">Jakirul</h2>
                                    <p className="font-semibold">jairulhaki@mail.com,</p>
                                    <button className="btn" onClick={handleSingOut}>logout</button>
                                </div>
                            </div>
                        </div>
                        : <NavLink className={'btn'} to={'/login'}>Login</NavLink>
                }

            </div>
        </div>
    );
};

export default Navbar;