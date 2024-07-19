import React from "react";
import { auth, provider } from "../../Configs/ConfigsOfFirebase";
import { signInWithPopup } from "firebase/auth";
import {useNavigate} from "react-router-dom";

const Auth = () => {

const navigate = useNavigate();


  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userId : results.user.uid,
      name : results.user.displayName,
      profilePhoto : results.user.photoURL,
      isAuth : true,
    }
    localStorage.setItem("auth",JSON.stringify(authInfo));
    navigate("/expense-tracker");
  };

  return (
    <div>
      <p>Sign In With Google To Continue</p>
      <button onClick={signInWithGoogle}>Sign In With Google</button>
    </div>
  );
};

export default Auth;
