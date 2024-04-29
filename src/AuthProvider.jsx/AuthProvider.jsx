import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../Firebse/Firebase";
import { onAuthStateChanged } from "firebase/auth/cordova";

export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [loading,setLoading]=useState(true)
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
     const signIn =(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }
     const logOut=()=>{
        setLoading (true)
        return signOut(auth)
        
     }

    useEffect(()=>{
 const unSubscribe = onAuthStateChanged(auth,currentUser=>{
    console.log('user in the auth state change ',currentUser)
    setUser(currentUser)
    setLoading (false)
})
return()=>{
    unSubscribe()
}
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        setUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;