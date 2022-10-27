import React from 'react';
import { createContext, useState, useEffect } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from './../Firebase/firebase.init';

export const AuthContext = createContext()
const auth = getAuth(app);



const ContextProvider = ({children}) => {
    const [user , setUser] = useState(null);
    const [loading, setLoading] = useState(true);

   
   
        const googleSignIN = (provider) =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
const logOut = () =>{
    setLoading(true);
    return signOut(auth)

}
const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
}


const verifyEmail = () =>{
    return sendEmailVerification(auth.currentUser);
}

useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if(currentUser === null || currentUser.emailVerified){
            setUser(currentUser);
        }
            
            setLoading(false);
        });

        return () =>{
            unsubscribe();
        }
    }, [])
    const authInfo = {user, googleSignIN, logOut, createUser, signIn, loading, verifyEmail, setLoading};


    if(loading){
        return (<div className ="flex items-center justify-center space-x-2 animate-bounce my-5">
        <div className ="w-8 h-8 bg-black rounded-full"></div>
    </div>)
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};



export default ContextProvider;