import React from "react";

const Profile = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Age: {props.age}</h1>
      <h1>This person is : {props.isMarried ? "is" : "is not"} Married </h1>
      {props.freind.map((friend) => (
        <h1>{friend}</h1>
      ))}
    </div>
  );
};

export default Profile;
