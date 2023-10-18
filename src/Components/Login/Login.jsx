import { Link } from "react-router-dom";


const Login = () => {

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const user = {email,password};
        console.log(user);
    }

    return (
        <form onSubmit={handleLogin} className="card-body">
            <h3 className="text-4xl font-bold">Please login</h3>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
            </div>
            <p className="text-2xl">New here , Please <Link className="font-bold text-blue-800" to={'/singup'}>Register</Link></p>
        </form>
    );
};

export default Login;