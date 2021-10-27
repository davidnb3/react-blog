import React from "react";

export default function Post({ post }) {
  return (
    <div>
      <div className="card">
        <h3 className="card-title">{post.title}</h3>
        <span className="card-author">{post.author}</span>
        <span className="card-date">{post.date}</span>
        <p className="card-body">{post.body}</p>
        <div class="fader"></div>
        <span className="card-topic">{post.topic}</span>
      </div>
    </div>
  );
}
