import { useEffect } from "react";
import Post from "../components/Post";
import "./pages.css";

export default function Homepage({ posts, setPosts }) {
  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("existingPosts")));
  }, [setPosts]);

  return (
    <div className="page-container">
      {posts === null ? (
        <div></div>
      ) : (
        posts.map((post, index) => <Post post={post} key={index} />)
      )}
    </div>
  );
}
