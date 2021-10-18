import { getAuth, signOut, signInWithPopup, GoogleAuthProvider,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from "../components/Login/Firebase/firebase.init";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();

    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
    }

    // Observe for user state changed.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            } else {
                setUser({})
            }
        });
        return () => unsubscribe;
    }, [])

    // Logout function
    const logout = () => {
        signOut(auth).then(() => {})
    }
    return {
        user,
        logout,
        signInUsingGoogle
    }
}
export default useFirebase;