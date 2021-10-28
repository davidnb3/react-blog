import { useState } from "react";
import "./components.css";

export default function EditPost({ singlePost, setSinglePost, setEditPost }) {
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input
        className="form-element"
        value={singlePost[0].title}
        onChange={(e) =>
          setSinglePost({ ...singlePost, title: e.target.value })
        }
        type="text"
        id="title"
        name="title"
        maxLength="150"
        required
      />
      <label htmlFor="author">Author</label>
      <input
        className="form-element"
        value={singlePost[0].author}
        onChange={(e) =>
          setSinglePost({ ...singlePost, author: e.target.value })
        }
        type="text"
        it="author"
        name="author"
        required
      />
      <label htmlFor="text">Text</label>
      <textarea
        className="form-element"
        value={singlePost[0].body}
        onChange={(e) => setSinglePost({ ...singlePost, body: e.target.value })}
        type="text"
        id="body"
        name="body"
        required
      />
      <label htmlFor="topic">Topic</label>
      <select
        className="form-element"
        value={singlePost[0].topic}
        onChange={(e) =>
          setSinglePost({ ...singlePost, topic: e.target.value })
        }
        id="topic"
        name="topic"
        required
      >
        <option value="guides">Guides</option>
        <option value="music">Music</option>
        <option value="recipes">Recipes</option>
        <option value="development">Development</option>
      </select>
      <button type="submit" className="form-element btn">
        Submit
      </button>
      <button
        type="submit"
        className="form-element btn"
        onClick={() => setEditPost(false)}
      >
        Cancel
      </button>
    </form>
  );
}
