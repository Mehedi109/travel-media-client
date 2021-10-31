import React from 'react';
import { useLocation, useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
  const { googleLogIn } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || '/home';

  const handleGoogleLogIn = () => {
    googleLogIn().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <div>
      <button className="btn btn-success" onClick={handleGoogleLogIn}>
        Login With Google
      </button>
    </div>
  );
};

export default Login;
