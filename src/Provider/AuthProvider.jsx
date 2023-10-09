import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    console.log(user);



    const googleProvider = new GoogleAuthProvider()


    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
        
    }

    const LogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setName(currentUser.displayName)
            setEmail(currentUser.email)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    },[])

    const createUser = ( email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        return signOut(auth)
    }


    const AuthInfo = {
        user,
        createUser,
        logOut,
        loading,
        googleSignIn,
        LogIn,
        name,
        email
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;