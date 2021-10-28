import "./components.css";

export default function Form({ setNewArticle, handleSubmit, ...newArticle }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        className="form-element"
        value={newArticle.title}
        onChange={(e) =>
          setNewArticle({ ...newArticle, title: e.target.value })
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
        value={newArticle.author}
        onChange={(e) =>
          setNewArticle({ ...newArticle, author: e.target.value })
        }
        type="text"
        it="author"
        name="author"
        required
      />
      <label htmlFor="text">Text</label>
      <textarea
        className="form-element"
        value={newArticle.body}
        onChange={(e) => setNewArticle({ ...newArticle, body: e.target.value })}
        type="text"
        id="body"
        name="body"
        required
      />
      <label htmlFor="topic">Topic</label>
      <select
        className="form-element"
        value={newArticle.topic}
        onChange={(e) =>
          setNewArticle({ ...newArticle, topic: e.target.value })
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
      <button type="submit" className="form-element button">
        Submit
      </button>
    </form>
  );
}
