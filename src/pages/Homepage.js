import { useEffect, useState } from "react";
import Post from "../components/Post";
import Filter from "../components/Filter";
import "./pages.css";

export default function Homepage({ posts, setPosts }) {
  const [searchInput, setSearchInput] = useState("");
  const [topicFilter, setTopicFilter] = useState("");

  useEffect(() => {
    setPosts(JSON.parse(localStorage.getItem("existingPosts")));
  }, [setPosts]);

  if (posts.length !== 0) {
    return (
      <>
        <Filter
          posts={posts}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          setTopicFilter={setTopicFilter}
        />
        {posts
          // First filter the posts by topic
          .filter((post) => {
            if (topicFilter === "") {
              return post;
            } else if (
              post.topic.toLowerCase().includes(topicFilter.toLowerCase())
            ) {
              return post;
            }
          })
          // Then filter by title and author
          .filter((post) => {
            if (searchInput === "") {
              return post;
            } else if (
              post.title.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return post;
            } else if (
              post.author.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return post;
            }
          })
          // Then map out each post
          .map((post, index) => (
            <Post post={post} key={index} id={post.id} />
          ))}
      </>
    );
  } else {
    return <div className="placeholder">Click on Write to add an article</div>;
  }
}
