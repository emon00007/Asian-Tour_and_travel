import PropTypes from "prop-types";
import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../AuthProvider.jsx/AuthProvider";


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <div className="text-center "><span className="loading loading-infinity loading-lg"></span></div>
    }
    if (user) {
        return children;
    }

    // Redirect to login page with current location as the state
    return <Navigate to="/login" state={{ from: location.pathname }} />;

};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;