import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate } from "react-router-dom";



const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
      return <span className="loading flex mt-56 mx-auto loading-bars loading-lg"></span>
    }
    if(!user){
       return <Navigate to="/login"/>
    }
    return children;
};

export default PrivateRoutes;