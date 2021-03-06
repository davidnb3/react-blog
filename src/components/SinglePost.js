import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Form from "./Form";

export default function SinglePost() {
  const { id } = useParams();
  const [singlePost, setSinglePost] = useState();
  const [editPost, setEditPost] = useState(false);

  const handleDelete = () => {
    // Get posts from localstorage
    let existingPosts = JSON.parse(localStorage.getItem("existingPosts"));
    // Loop through them and remove the post that has the same id as singlePost
    for (let i = 0; i < existingPosts.length; i++) {
      if (existingPosts[i].id === singlePost[0].id) {
        existingPosts.splice(i, 1);
      }
    }
    // Save updated array to localstorage
    localStorage.setItem("existingPosts", JSON.stringify(existingPosts));
    window.location = "/";
  };

  useEffect(() => {
    const posts = JSON.parse(localStorage.getItem("existingPosts"));
    // Not using strict equal
    // because post.id is a number, id from params is a string
    const filteredPost = posts.filter((post) => post.id == id);
    // filter out the post and save it as singlePost
    setSinglePost(filteredPost);
  }, [id]);

  // Do not render if singlePost is undefined
  if (singlePost) {
    return (
      <div className="post">
        {/*If editPost is false, display singlePost*/}
        {editPost === false && (
          <>
            <h3 className="post-title">{singlePost[0].title}</h3>
            <span className="post-author">{singlePost[0].author}</span>
            <span className="post-date">{singlePost[0].date}</span>
            <p className="post-body">{singlePost[0].body}</p>
            <span className="post-topic">{singlePost[0].topic}</span>
            <button className="post-edit btn" onClick={() => setEditPost(true)}>
              Edit
            </button>
            <button className="post-delete btn" onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
        {/*If editPost is true, display Form*/}
        {editPost === true && (
          <Form
            singlePost={singlePost}
            setSinglePost={setSinglePost}
            setEditPost={setEditPost}
          />
        )}
      </div>
    );
  } else {
    return null;
  }
}
