import React, { useEffect, useState } from "react";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import { db, auth } from "../FireBaseConfigs";

const Home = ({ isAuth }) => {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };

  return (
    <div className="homePage p-4 bg-gray-100 min-h-screen">
      {postList.map((post) => {
        return (
          <div key={post.id} className="post p-4 mb-4 bg-white rounded shadow">
            <div className="postHeader flex justify-between items-center">
              <div className="title">
                <h1 className="text-xl font-bold">{post.title}</h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && (
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => {
                      deletePost(post.id);
                    }}
                  >
                    X
                  </button>
                )}
              </div>
            </div>
            <div className="postTextContainer mt-2">{post.postText}</div>
            <h3 className="mt-2 text-gray-500">@{post.author.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
