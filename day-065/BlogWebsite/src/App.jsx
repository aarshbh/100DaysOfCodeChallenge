import { useState } from "react";
import { auth, provider } from "./FireBaseConfigs";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import Login from "./Pages/Login";
import { signOut } from "firebase/auth";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav className="m-0 w-full h-20 bg-black flex justify-center items-center text-white no-underline text-center">
        <div className="flex space-x-4">
          <Link to="/"> Home </Link>
          {isAuth && <Link to="/createpost"> Create Post </Link>}
          {!isAuth ? (
            <Link to="/login"> Login </Link>
          ) : (
            <button onClick={signUserOut}> Logout </button>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
