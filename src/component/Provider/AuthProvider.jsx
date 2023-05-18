import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../firebase/firebase.config';




export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    const handleGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, curUser => {
            setUser(curUser)
            setLoading(false)
        });
        return () => {
            unsubscribe()
        }
    }, [])
    const updatePic = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const authInfo = {
        user,
        loading,
        registerUser,
        loginUser,
        logOut,
        updatePic,
        handleWithGoogle,
        handleGithub
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;