import React, { createContext, useEffect, useState } from 'react';
import app from '../../Config/firebase.config'
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, OAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)


    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const facebookProvider = new FacebookAuthProvider()
    const yahooProvider = new OAuthProvider('yahoo.com')


    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const facebookLogin = () => {
        return signInWithPopup(auth, facebookProvider)
    }

    const yahooLogin = () => {
        return signInWithPopup(auth, yahooProvider)
    }


    const LogInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userProfileUpdate = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    const verifyUser = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }

    }, [])

    const authInfo = {
        googleLogin,
        facebookLogin,
        githubLogin,
        yahooLogin,
        LogInUser,
        registerUser,
        userProfileUpdate,
        verifyUser,
        logOut,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;