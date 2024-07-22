import React from 'react';

const useGetUserInfo = () => {
  const authData = JSON.parse(localStorage.getItem("auth"));

  if (!authData) {
    console.error("No auth data found in localStorage");
    return { name: null, profilePhoto: null, userID: null, isAuth: false };
  }

  const { name, profilePhoto, userID, isAuth } = authData;

  console.log("Retrieved user info:", { name, profilePhoto, userID, isAuth });

  return { name, profilePhoto, userID, isAuth };
};

export default useGetUserInfo;
