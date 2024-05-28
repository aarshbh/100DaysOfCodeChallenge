import {auth , provider } from "../Config/Firebase";
import { signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login() {

const navigate = useNavigate();

  const signinwithgoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
    navigate("/");
  };

  return (
    <div>
      <p> Sign in with google to continue </p>
      <button onClick={signinwithgoogle}> Sign in with google </button>
    </div>
  )
}

export default Login;
