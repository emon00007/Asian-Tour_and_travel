import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider.jsx/AuthProvider";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Ragestration = () => {
    const navigate = useNavigate()
    const { createUser, setUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState("");
    const [showPassword, setShowpassword] = useState(false);
    const handelarRegester = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const email = form.email.value
        const photoUrl = form.photoUrl.value
        const password = form.password.value
        console.log(name, photoUrl)

        if (password.length < 6) {
            setRegisterError("Password should be at least 6 characters");
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError("Password must contain at least one capital letter");
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError("Password must contain at least one Small letter");
            return;
        }
        // create user
        createUser(email, password)
            .then((result) => {
                console.log(result)
                // updateUser(
                //   name,photoUrl
                // )
                toast.success("Registration successful!");
                setUser({ displayName: name, photoURL: photoUrl });

                navigate("/")
                    // .then(() => {


                    // })
                    .catch((error) => {
                        setRegisterError(error.message);
                    });
            })
            .catch((error) => {
                setRegisterError('Email Already exist', error.message);
            });
        console.log('button hitted', name, email, photoUrl, password)
    }
    return (
        <div className="">
            <Helmet><title>Regestration</title></Helmet>
            <div className=" min-h-screen bg-base-200">

                <div className="text-center md:p-3 lg:p-10 md:text-3xl lg:text-5xl md:font-semibold lg:font-extrabold"><p>Please Register</p></div>
                <div className="hero ">

                    <div className="card shrink-0  lg:w-1/3 mx-auto  shadow-2xl bg-base-100">
                        <form onSubmit={handelarRegester} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo url" name="photoUrl" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input
                                        className="input input-bordered w-full py-2 px-4"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter Your Password"
                                        name="password"
                                        id=""
                                        required
                                    />
                                    <span
                                        className="absolute top-4 right-2 cursor-pointer"
                                        onClick={() => setShowpassword(!showPassword)}

                                    >
                                        {showPassword ? (
                                            <FaRegEyeSlash></FaRegEyeSlash>
                                        ) : (
                                            <FaRegEye></FaRegEye>
                                        )}
                                    </span>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">register</button>
                            </div>

                        </form>

                        {registerError && <p className="text-red-600 text-center">{registerError}</p>}
                        <div className="text-center pb-5"><p>You have already an account  <Link className="font-bold  text-blue-600" to="/login">Log In</Link></p></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ragestration;