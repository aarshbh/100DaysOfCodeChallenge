import React from "react";
import { auth, provider } from "../FireBaseConfigs";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);

      navigate("/");
    });
  };

  return (
    <div className="loginpage">
      <p> Sign In With Google to Continue </p>
      <button
        className="login-with-google-btn border border-black bg-slate-200 rounded-lg mt-3 p-1 hover:bg-slate-100"
        onClick={signInWithGoogle}
      >
        {" "}
        Sign In With Google{" "}
      </button>
    </div>
  );
};

export default Login;
