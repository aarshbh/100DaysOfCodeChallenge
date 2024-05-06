import React from 'react'
import Changeprofile from '../Components/Changeprofile';
import {useContext} from "react";
import {AppContext} from "../App";

const Profile = () => {
  const {username} = useContext(AppContext);
  return (
    
    <div>
    

      <h1>This is profile Page. Profile User is {username}</h1>
      <Changeprofile />

    </div>


  )
}

export default Profile;
