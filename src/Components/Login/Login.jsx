
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useState } from "react";



const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { singInUser, user, googleLogin } = useContext(AuthContext);

    const emailRef = useRef();
    // console.log(emailRef);
    useEffect(() => {
        emailRef.current.focus()
    }, [])

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // const user = {email,password};
        // console.log(user);

        singInUser(email, password)
            .then(result => {
                console.log(result.user);
                form.reset()
            })
            .then(err => console.log(err))
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
            })
            .then(err => console.log(err))
    }

    return (
        <div className='w-3/4 md:w-1/2 mx-auto glass rounded-2xl bg-gray-400'>
            <form onSubmit={handleLogin} className="card-body">
                <h3 className="text-4xl font-bold">Please login</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input ref={emailRef} type="email" name="email" placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPassword ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered" required />
                    <div className="text-2xl md:text-3xl absolute bottom-10 right-4" onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <AiFillEye></AiFillEye> : <AiFillEyeInvisible></AiFillEyeInvisible>
                        }
                    </div>
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <p className="text-2xl">New here , Please <Link className="font-bold text-blue-800" to={'/singup'}>Register</Link></p>
            </form>
            <div className="p-4">
                <p className="text-xl font-semibold">Login with</p>
                <button onClick={handleGoogleLogin} className="btn bg-green-700 font-bold">Google</button>
            </div>
        </div>
    );
};

export default Login;