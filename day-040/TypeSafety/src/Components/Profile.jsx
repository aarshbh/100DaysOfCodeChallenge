import React from "react";
import PropTypes from "prop-types";
const Profile = (props) => {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
      <h1>Age: {props.age}</h1>
      <h1>This person is : {props.isMarried ? "is" : "is not"} Married </h1>
      {props.friend.map((friend) => (
        <h1>{friend}</h1>
      ))}
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
};



export default Profile;
