import { useEffect } from "react";
import Post from "../components/Post";
import "./pages.css";

export default function Homepage({ posts, setPosts }) {
  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("existingPosts")));
  }, [setPosts]);

  if (posts) {
    return posts.map((post, index) => (
      <Post post={post} key={index} id={post.id} />
    ));
  } else {
    return null;
  }
}
