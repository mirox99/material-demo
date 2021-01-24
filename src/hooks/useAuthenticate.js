import {useEffect, useState} from "react";
import firebase from "firebase/app";

export const useAuthenticated = () => {
    let [user, setUser] = useState(null)
    let [loaded, setLoaded] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((u) => {
            if (u) {
                setUser(u)
            } else {
                setUser(null)
            }
            setLoaded(true)
        });

    }, [])

    return {user, setUser, loaded}
};