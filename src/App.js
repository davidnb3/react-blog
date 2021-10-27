import Homepage from "./pages/Homepage";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import { useState } from "react";
import "./app.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [article, setArticle] = useState({
    title: "",
    author: "",
    body: "",
    topic: "",
    date: new Date().toLocaleDateString("en-US"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // check for existing posts inside localstorage
    let existingPosts = JSON.parse(localStorage.getItem("existingPosts"));
    // if no existingPosts, create new Array
    if (existingPosts === null) existingPosts = [];
    // push new article to existingPosts array
    existingPosts.push(article);
    // save array to localstorage
    localStorage.setItem("existingPosts", JSON.stringify(existingPosts));
    window.location = "/";
  };

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage posts={posts} setPosts={setPosts} />
          </Route>
          <Route path="/write">
            <Write
              {...article}
              setArticle={setArticle}
              handleSubmit={handleSubmit}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
