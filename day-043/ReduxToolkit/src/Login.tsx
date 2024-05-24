import { useState } from "react";
import { login , logout } from "./Store";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const [newUsername, setNewUsername] = useState("");

  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <h1>
      {username}
      <input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewUsername(e.target.value);
        }}
      />
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        {" "}
        Submit Login{" "}
      </button>
      <button onClick={ () => dispatch(logout())}> Logout </button>
    </h1>
  );
};

export default Login;
