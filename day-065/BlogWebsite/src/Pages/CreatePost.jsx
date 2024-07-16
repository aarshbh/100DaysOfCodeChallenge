import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../FireBaseConfigs";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  const postCollectionRef = collection(db, "posts");
  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [isAuth, navigate]);

  return (
    <div className="createPostPage flex justify-center items-center min-h-screen bg-gray-100">
      <div className="cpContainer w-full max-w-md p-5 bg-black rounded-xl text-white flex flex-col space-y-4">
        <h1 className="text-center text-2xl mb-4">Create a post</h1>
        <div className="inputGp flex flex-col space-y-2">
          <label className="text-lg">Title:</label>
          <input
            placeholder="Title..."
            className="p-2 text-black rounded"
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="inputGp flex flex-col space-y-2">
          <label className="text-lg">Post:</label>
          <textarea
            placeholder="Post..."
            className="p-2 text-black rounded"
            onChange={(event) => setPostText(event.target.value)}
          />
        </div>
        <button
          onClick={createPost}
          className="mt-4 py-2 px-4 bg-blue-500 rounded hover:bg-blue-700 transition-colors"
        >
          Submit Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
