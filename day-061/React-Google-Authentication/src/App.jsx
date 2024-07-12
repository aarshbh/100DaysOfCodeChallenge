import { useState } from "react";
import "./App.css";
import { signInWithGoogle } from "./firebaseConfig";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignIn = async () => {
    await signInWithGoogle();
    setIsSignedIn(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!isSignedIn ? (
        <button 
          onClick={handleSignIn} 
          className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition duration-300"
        >
          Sign in with Google
        </button>
      ) : (
        <>
          <h1 className="mt-6 text-xl font-semibold text-gray-800">
            {localStorage.getItem("name")}
          </h1>
          <h1 className="text-lg text-gray-600">
            {localStorage.getItem("email")}
          </h1>
          <img 
            src={localStorage.getItem("profilePic")} 
            alt="Profile" 
            className="mt-4 rounded-full shadow-lg w-32 h-32 object-cover"
          />
        </>
      )}
    </div>
  );
}

export default App;
