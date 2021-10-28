import Form from "../components/Form";
import "./pages.css";

export default function Write({ setNewArticle, handleSubmit, ...newArticle }) {
  return (
    <div className="page-container">
      <h2>Write New Article</h2>
      <Form
        {...newArticle}
        setNewArticle={setNewArticle}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
