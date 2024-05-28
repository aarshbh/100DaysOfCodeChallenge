import {Link} from "react-router-dom";
import {auth} from "../Config/Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
const Navbar = () => {

const [user] = useAuthState(auth);

  return (
    <div className="App">
     <Link to="/"> Home </Link>
     <Link to="/Login"> Login </Link>  
     < Link to="/createpost"> Create Post</Link>
     <div>
      <p> {user?.displayName} </p>
      <img src={user?.photoURL || "" } width="100" height="100" />
     </div>
    </div>
  )
}

export default Navbar
