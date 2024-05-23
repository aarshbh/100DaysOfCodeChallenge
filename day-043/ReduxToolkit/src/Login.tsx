import { useState } from 'react';
import {login,logout} from "./Store"
import { useDispatch , useSelector } from 'react-redux';
const Login = () => {
  const [newUsername , setNewUsername] = useState("");

  const dispatch = useDispatch();
const username = useSelector((state: any) => state.user.value.username);
  return (
    <h1>
      This is Login Button
      <input 
      onChange={(e) => {
        setNewUsername(e.target.value);
      }}/>
      <button onClick = {() => dispatch(login({username: newUsername}))}> Submit Login </button>
      <button> Logout </button>

    </h1>
  )
}

export default Login
