import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../config/firebase.config";
import { PropTypes } from "prop-types";
import useAxios from "../hooks/useAxios"


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)
    const axios = useAxios()

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const profile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email
            const loggedUser = { email: userEmail }
            setUser(currentUser)
            setLoading(false)


            if (currentUser) {
                axios.post('/auth/create-token', loggedUser)
                    .then(res => {
                        if (res.data.success) {
                            console.log(res.data.success);
                        } else {
                            logOut()
                        }
                    })
            } else {
                axios.post('/auth/remove-token', loggedUser)
                    .then(res => {
                        console.log(res.data);
                    })
            }
        })
        return () => {
            unsubscribe()

        }
    }, [axios, user])



    const authInfo = {
        user,
        loading,
        createUser,
        userSignIn,
        profile,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}