import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";


import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../../AuthProvider.jsx/AuthProvider";

// import { Tooltip } from "react-tooltip";



const Navbar = () => {

  const { user, logOut } = useContext(AuthContext)
const [theme,setTheme]=useState('light')
console.log(user)
  const handleToggle = e => {
   
    if (e.target.checked) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    localStorage.setItem('theme', theme)
    const localTheme = localStorage.getItem('theme')

    // add custom data-theme attribute
    document.querySelector('html').setAttribute('data-theme', localTheme)
  }, [theme])

  const handelSignOut = () => {
    
    logOut()
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        console.error(error)
      })
  }

  const links = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/aboutUs'>Abouts</NavLink></li>
    <li><NavLink to='/contacts'>Contacts Us</NavLink></li>
    <li><NavLink to='/addturest'>AddTourists Spot</NavLink></li>
    <li><NavLink to='/myList'>My List</NavLink></li>
    <li><NavLink to='/allDataShow'>All Tourist Spot </NavLink></li>
    

  </>
 
  return (
    <div className="navbar z-50 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 z-50 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu z-50 menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
            {links}
          </ul>
        </div>
        <a className=" text-2xl font-bold">Asian tour <span className="text-amber-400">& Travel</span></a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">


          {links}

        </ul>
      </div>
      <div className="navbar-end">
        <div tabIndex={0}  className=" text-4xl  "  >
        <input
            type='checkbox'
            onChange={handleToggle}
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
          <div className="w-10 h-10 rounded-full mr-4 tooltip tooltip-left "data-tip={user?.displayName}>
          {user && <img className="w-16 h-10 rounded-full "  alt="#" src={user.photoURL } />|| <CgProfile className="text-3xl"></CgProfile> }
          </div>
        </div>
        
        {
          user ?
            <Link to="/login" onClick={handelSignOut} className="btn">Sign Out</Link> : <Link to="/login" className="btn">Log in</Link>
        }
        

      </div>
      </div>
    
  );
};

export default Navbar;