import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Config/Firebase";
import Post from "./Post";

export interface Post {
  id: string;
  userId: string;
  title: string;
  username: string;
  description: string;
}

function Main() {
  const [postsList, setPostsList] = useState<Post[] | null>(null);
  const postsRef = collection(db, "Posts");

  const getPosts = async () => {
    const data = await getDocs(postsRef);
    setPostsList(
      data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as Post[]
    );
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {postsList?.map((Post) => (
        <Post />
      ))}
    </div>
  );
}

export default Main;
