import { Link } from "react-router-dom";

export default function Post({ post, id }) {
  return (
    <Link to={`/${id}`}>
      <div className="card">
        <h3 className="card-title">{post.title}</h3>
        <span className="card-author">{post.author}</span>
        <span className="card-date">{post.date}</span>
        <p className="card-body">{post.body}</p>
        <span className="card-topic">{post.topic}</span>
      </div>
    </Link>
  );
}
