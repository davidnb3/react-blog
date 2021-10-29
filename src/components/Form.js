import "./components.css";
import { useState, useEffect } from "react";

export default function Form({ singlePost }) {
  const [formData, setFormData] = useState({
    id: new Date().getTime(),
    title: "",
    author: "",
    body: "",
    topic: "",
    date: new Date().toLocaleDateString("de-DE"),
  });

  useEffect(() => {
    // check for singlePost prop
    // if true, set singlePost as formData
    if (singlePost) {
      setFormData(singlePost[0]);
    }
  }, [singlePost]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // check for existing posts inside localstorage
    let existingPosts = JSON.parse(localStorage.getItem("existingPosts"));
    // if no existingPosts, create new Array
    if (existingPosts === null) existingPosts = [];
    // check for singlePost prop
    // if true, replace existing post with new formData
    if (singlePost) {
      for (let i = 0; i < existingPosts.length; i++) {
        if (existingPosts[i].id === singlePost[0].id) {
          existingPosts.splice(i, 1, formData);
        }
      }
    } else {
      // push new article to existingPosts array
      existingPosts.push(formData);
    }
    // save array to localstorage
    localStorage.setItem("existingPosts", JSON.stringify(existingPosts));
    window.location = "/";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        className="form-element"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        type="text"
        id="title"
        name="title"
        maxLength="150"
        required
      />
      <label htmlFor="author">Author</label>
      <input
        className="form-element"
        value={formData.author}
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        type="text"
        it="author"
        name="author"
        required
      />
      <label htmlFor="text">Text</label>
      <textarea
        className="form-element"
        value={formData.body}
        onChange={(e) => setFormData({ ...formData, body: e.target.value })}
        type="text"
        id="body"
        name="body"
        required
      />
      <label htmlFor="topic">Topic</label>
      <select
        className="form-element"
        defaultValue="recipes"
        onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
        id="topic"
        name="topic"
        required
      >
        <option value="guide">Guide</option>
        <option value="music">Music</option>
        <option value="recipes">Recipes</option>
        <option value="development">Development</option>
      </select>
      <button type="submit" className="form-element btn">
        Submit
      </button>
    </form>
  );
}
