import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";



const PrivateRoutes = ({children}) => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    if(!user){
       return navigate('/login')
    }
    return children;
};

export default PrivateRoutes;