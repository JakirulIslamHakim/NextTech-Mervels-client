import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Swal from "sweetalert2";

const Singup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const nameRef = useRef();
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleSingup = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // const user = {name,photo,email,password};
    // console.log(user);

    if (
      !/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-]).{6,}$/.test(password)
    ) {
      return Swal.fire({
        icon: "error",
        text: "Your password should be at least 6 characters and contain at least one uppercase letter and one special character.",
      });
    }

    createUser(email, password)
      .then((user) => {
        console.log(user.user);
        form.reset();
        Swal.fire({
          icon: "success",
          title: "Singup Successfully",
          text: "Welcome",
        });
        navigate('/')
      })
      .catch((err) => {
        console.log(err.message);
        Swal.fire({
          icon: "error",
          text: err.message,
        });
      });
  };

  return (
    <div data-theme="light"  className="w-3/4 md:w-1/2 mx-auto glass rounded-2xl bg-gray-400 text-center">
      <form onSubmit={handleSingup} className="card-body">
        <h3 className="text-4xl font-bold">Please Singup</h3>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            ref={nameRef}
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Photo Url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <div
            className="text-2xl md:text-3xl absolute bottom-2 right-4"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <AiFillEye></AiFillEye>
            ) : (
              <AiFillEyeInvisible></AiFillEyeInvisible>
            )}
          </div>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Singup</button>
        </div>
        <p className="text-2xl my-6">
          Already have an account ? Please{" "}
          <Link className="font-bold text-blue-800" to={"/login"}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Singup;
