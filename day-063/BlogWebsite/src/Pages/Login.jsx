import React from "react";
import { auth, provider } from "../FireBaseConfigs";
import { signInWithPopup } from "firebase/auth";

const Login = ({setIsAuth}) => {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth",true)
      setIsAuth(true);
    });
  };

  return (
    <div className="loginpage">
      <p> Sign In With Google to Continue </p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}> Sign In With Google </button>
    </div>
  );
};

export default Login;
