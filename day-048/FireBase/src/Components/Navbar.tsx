import { Link } from "react-router-dom";
import { auth } from "../Config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
// import { signout } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);

//  const signUserOut  = async () => {
  // await signOut(auth);
 };

  return (
    <div className="App">
      <Link to="/"> Home </Link>
      {!user ? (
        <Link to="/Login"> Login </Link>
      ) : (
        <Link to="/Createpost"> Create Post</Link>
      )}
      <div>
        <p> {user?.displayName} </p>
        <img src={user?.photoURL || ""} width="100" height="100" />
      </div>
    </div>
  );
};

export default Navbar;

