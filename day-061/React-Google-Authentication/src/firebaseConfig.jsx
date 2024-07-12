import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider ,signInWithPopup} from 'firebase/auth';
const firebaseConfig = {
    
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);

 const provider = new GoogleAuthProvider();





 export const signInWithGoogle = () => {
     signInWithPopup(auth, provider)
     .then((result) => {
       const name = result.user.displayName;
       const email = result.user.email;
       const profilePic = result.user.photoURL;

       localStorage.setItem("name",name);
       localStorage.setItem("email",email);
       localStorage.setItem("profilePic",profilePic);


     }).catch((error) => {
        console.log(error);
 })
 }
