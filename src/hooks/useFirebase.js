import { getAuth, signOut, signInWithPopup, GoogleAuthProvider,onAuthStateChanged  } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from "../components/Login/Firebase/firebase.init";

initAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();

    // Google sign in
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result => {
            setUser(result.user);
        })
        .finally(() => setIsLoading(false));
    }

    // Observe for user state changed.
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])


    // Logout function
    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {})
        .finally(() => setIsLoading(false));
    }
    return {
        isLoading,
        user,
        logout,
        signInUsingGoogle
    }
}
export default useFirebase;