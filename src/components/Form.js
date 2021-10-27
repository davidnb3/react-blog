import "./components.css";

export default function Form({ setArticle, handleSubmit, ...article }) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        className="form-element"
        value={article.title}
        onChange={(e) => setArticle({ ...article, title: e.target.value })}
        type="text"
        id="title"
        name="title"
        required
      />
      <label htmlFor="author">Author</label>
      <input
        className="form-element"
        value={article.author}
        onChange={(e) => setArticle({ ...article, author: e.target.value })}
        type="text"
        it="author"
        name="author"
        required
      />
      <label htmlFor="text">Text</label>
      <textarea
        className="form-element"
        value={article.body}
        onChange={(e) => setArticle({ ...article, body: e.target.value })}
        type="text"
        id="body"
        name="body"
        required
      />
      <label htmlFor="topic">Topic</label>
      <select
        className="form-element"
        value={article.topic}
        onChange={(e) => setArticle({ ...article, topic: e.target.value })}
        id="topic"
        name="topic"
        required
      >
        <option value="guides" selected>
          Guides
        </option>
        <option value="music">Music</option>
        <option value="recipes">Recipes</option>
        <option value="anything else">Everything else</option>
      </select>
      <button type="submit" className="form-element button">
        Submit
      </button>
    </form>
  );
}
