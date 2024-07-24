import { auth, provider } from "../../Configs/ConfigsOfFirebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import { useGetUserInfo } from "../../Hooks/useGetUserInfo";

export const Auth = () => {
  const navigate = useNavigate();
  const { isAuth } = useGetUserInfo();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authInfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authInfo));
    navigate("/expense-tracker");
  };

  if (isAuth) {
    return <Navigate to="/expense-tracker" />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-600">Penny&Dian</h1>
        <p className="text-lg text-purple-400">manage your finance</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <p className="text-center text-gray-700 mb-4">Sign In With Google to Continue</p>
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none"
          onClick={signInWithGoogle}
        >
          Sign In With Google
        </button>
      </div>
    </div>
  );
};
