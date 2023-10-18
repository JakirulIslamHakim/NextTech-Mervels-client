
import { Link } from 'react-router-dom';

const Singup = () => {

    const handleSingup = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = {name,photo,email,password};
        console.log(user);
    }

    return (
        <form onSubmit={handleSingup} className="card-body">
        <h3 className="text-4xl font-bold">Please login</h3>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
            <label className="label">
                <span className="label-text">Photo Url</span>
            </label>
            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
        </div>
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
        </div>
        <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
        </div>
        <p className="text-2xl my-6">Already have an account ? Please <Link className="font-bold text-blue-800" to={'/login'}>Login</Link></p>
    </form>
    );
};

export default Singup;