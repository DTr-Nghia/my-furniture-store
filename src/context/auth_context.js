import React, { useEffect, useContext, useState } from 'react'
import {auth} from "../firebase"


const AuthContext = React.createContext()

export const AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser] = useState(null);
    const [loading,setLoading] = useState(true)
    const [toLogin,setToLogin] = useState(true);
    const [toSignUp,setToSignUp]= useState(false);
    const [toRecover, setToRecover] = useState(false);
    const changetoLogin = () => {
        setToLogin(true);
        setToSignUp(false);
        setToRecover(false);
    }
    const changetoSignup = () => {
        setToLogin(false);
        setToSignUp(true);
        setToRecover(false);
    }
    const changetoRecover = () => {
        setToLogin(false);
        setToSignUp(false);
        setToRecover(true);
    }

    const signup = (email,password) => {
        return auth.createUserWithEmailAndPassword(email,password)
    }
    const login = (email,password)=> {
        return auth.signInWithEmailAndPassword(email,password)
    }
    const logout = () => {
        return auth.signOut()
    }
    const resetEmail = (email) => {
        return auth.sendPasswordResetEmail(email)
    }
    useEffect(() => {
        const unsub = auth.onAuthStateChanged((user) => {
                setCurrentUser(user)
                setLoading(false)
        })
        return unsub
    },[])
    const value = {
        currentUser,
        toLogin,
        toSignUp,
        toRecover,
        signup,
        login,
        logout,
        resetEmail, 
        changetoLogin,
        changetoSignup,
        changetoRecover
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
export const useAuth = () => {
    return useContext(AuthContext)
}