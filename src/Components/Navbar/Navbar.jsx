import { NavLink } from "react-router-dom";


const Navbar = () => {
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
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;