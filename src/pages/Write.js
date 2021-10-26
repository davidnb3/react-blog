import Form from "../components/Form";

import "./pages.css";

export default function Write({ setArticle, handleSubmit, ...article }) {
  return (
    <div className="page-container">
      <h2>Write New Article</h2>
      <Form {...article} setArticle={setArticle} handleSubmit={handleSubmit} />
    </div>
  );
}
