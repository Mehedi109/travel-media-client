import React, { useState } from "react";
import { useLocation, useHistory } from "react-router";
import useAuth from "../../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { googleLogIn } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const redirect_uri = location.state?.from || "/home";

  const handleGoogleLogIn = () => {
    googleLogIn().then((result) => {
      history.push(redirect_uri);
    });
  };

  return (
    <>
      <div className="login-form">
        <div className="shadow-lg p-5 m-5 w-50 mx-auto bg-light ">
          <div className="login">
            <h2>Login Here</h2>
            <div className="login-btn">
              <button className="btn btn-success" onClick={handleGoogleLogIn}>
                <i class="fab fa-google"></i> Login With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
