import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../Firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, seTLoading] = useState(true);

    const createUser = (email, password) => {
        seTLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        seTLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const LogOut = () => {
        seTLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged (auth, currentUser => {
            setUser(currentUser)
            seTLoading(false)
        })
        return () => unSubscribe()
    }, [])


    //    google
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = () => {
        seTLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const authInfo = {
        user,
        loading,
        createUser,
        singInUser,
        googleLogin,
        LogOut,
    }
    console.log(user);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;