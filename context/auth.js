import React, { useState,useContext, useEffect } from 'react';
import {auth} from '../firebase'

export const AuthContext =React.createContext()

import {  createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";




function AuthWrapper({children}) {
    const [user,setUser] = React.useState('')
    const [loading,setLoading]=React.useState(true)

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
        })
        setLoading(false);
    },[])
    function login(email,password){
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logout(){
        
        return signOut(auth)
    } 
    function forgot(email){
        return sendPasswordResetEmail(auth,email)
    }

    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password)
    }
     const store={
         login,user,logout,forgot,signup
     }
    
    return (
        <AuthContext.Provider value={store}>
    <div>{!loading&&children}</div>
    </AuthContext.Provider>
  )
}

export default AuthWrapper