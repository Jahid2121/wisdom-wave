import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)

    useEffect(()=> {
        
    },[])


    const AuthInfo = {
        user
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;