import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider.jsx/AuthProvider";


const Ragestration = () => {
    const {createUser} =useContext(AuthContext)
    const [showPassword, setShowpassword] = useState(false);
    const handelarRegester = e=>{
        e.preventDefault()
        const form =e.target
        const name = form.name.value
        const email = form.email.value
        const photoUrl = form.photoUrl.value
        const password = form.password.value

        // create user
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
        console.log('button hitted',name,email,photoUrl,password)
    }
    return (
        <div className="">
      <Helmet><title>Regestration</title></Helmet>
      <div className=" min-h-screen bg-base-200">

        <div className="text-center md:p-3 lg:p-10 md:text-3xl lg:text-5xl md:font-semibold lg:font-extrabold"><p>Please Register</p></div>
        <div className="hero ">

          <div className="card shrink-0  lg:w-1/3 mx-auto  shadow-2xl bg-base-100">
            <form  onSubmit={handelarRegester}  className="card-body">
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
                    // type={showPassword ? "text" : "password"}
                    placeholder="Enter Your Password"
                    name="password"
                    id=""
                    required
                  />
                  <span
                    className="absolute top-4 right-2 cursor-pointer"
                    
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
            
            {/* {registerError && <p className="text-red-600 text-center"></p>} */}
            <div className="text-center pb-5"><p>You have already an account  <Link className="font-bold  text-blue-600" to="/login">Log In</Link></p></div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Ragestration;