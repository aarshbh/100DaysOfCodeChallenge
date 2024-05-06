import React from 'react';
import {useState} from "react";
const Changeprofile = (props) => {
    const [newUsername , setNewUsername ] = useState("");

  return (
    <div>
      <input onChange={(event) => {setNewUsername(event.target.value)}}/>

    <button onClick={ ()=> {props.setUsername(newUsername);} }> Change Username </button>

    </div>
  )
}

export default Changeprofile
