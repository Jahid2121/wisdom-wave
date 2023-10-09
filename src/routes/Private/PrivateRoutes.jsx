import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";





const PrivateRoutes = ({children}) => {
  const {user, loader} = useContext(AuthContext)
  const location = useLocation()
  console.log(location.pathname);
  if(loader){
   return   <span className="loading loading-bars loading-lg"></span>
  }
  else if(!loader){
      if(!user){
          return <Navigate state={location.pathname} to="/login" />
        
     
         }
         return children ;
  }
      
  
};

export default PrivateRoutes;