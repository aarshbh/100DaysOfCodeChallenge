import { useState } from "react";
import { auth, provider } from "./FireBaseConfigs";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import CreatePost from "./Pages/CreatePost";
import Login from "./Pages/Login";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <nav className="m-0 w-full h-20 bg-black flex justify-center items-center text-white no-underline text-center">
        {/* # There is a additional div I added for spacing in the links */}
        <div className="flex space-x-4 ">
          <Link to="/"> Home </Link>
          <Link to="/createpost"> CreatePost </Link>

          <Link to="/login"> Login </Link>
        
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createpost" element={<CreatePost />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
