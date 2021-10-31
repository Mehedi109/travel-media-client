import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../components/Login/Firebase/firebase.init';
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  const googleLogIn = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoading(false)
    );
  };

  const handleGithubLogIn = () => {
    const gitHubProvider = new GithubAuthProvider();
    signInWithPopup(auth, gitHubProvider).then((result) => {
      const { displayName, email } = result.user;
      const loggedInUser = {
        name: displayName,
        email: email,
      };
      setUser(loggedInUser);
    });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return unsubscribed;
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  return {
    user,
    setUser,
    googleLogIn,
    logOut,
    isLoading,
    handleGithubLogIn,
  };
};

export default useFirebase;
