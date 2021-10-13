import { useEffect, useState } from "react";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import Authentication from "../firebase/firebase.init";

Authentication();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const facebookSignin = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const userInfo = result.user;
        setUser(userInfo);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const googleSignIn = (from, history) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const userInfo = result.user;
        history.push(from);
        setUser(userInfo);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const logOut = () => {
    signOut(auth).then(() => {});
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        console.log("User signed out");
      }
    });
  }, []);

  return { user, error, logOut, facebookSignin, googleSignIn };
};

export default useFirebase;
