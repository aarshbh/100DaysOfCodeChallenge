import React from 'react'
import Changeprofile from '../Components/Changeprofile';

const Profile = (props) => {
  return (
    
    <div>
    

      <h1>This is profile Page. Profile User is {props.username}</h1>
      <Changeprofile setUsername={props.setUsername}/>

    </div>


  )
}

export default Profile;
