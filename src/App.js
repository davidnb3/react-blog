import Homepage from "./pages/Homepage";
import Write from "./pages/Write";
import SinglePost from "./components/SinglePost";
import Navbar from "./components/Navbar";
import { useState } from "react";
import "./app.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [newArticle, setNewArticle] = useState({
    // Using milliseconds for ID, for convenience
    id: new Date().getTime(),
    title: "",
    author: "",
    body: "",
    topic: "",
    date: new Date().toLocaleDateString("de-DE"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // check for existing posts inside localstorage
    let existingPosts = JSON.parse(localStorage.getItem("existingPosts"));
    // if no existingPosts, create new Array
    if (existingPosts === null) existingPosts = [];
    // push new article to existingPosts array
    existingPosts.push(newArticle);
    // save array to localstorage
    localStorage.setItem("existingPosts", JSON.stringify(existingPosts));
    window.location = "/";
  };

  return (
    <div className="app">
      <Router>
        <Navbar />
        <div className="app-container">
          <Switch>
            <Route exact path="/">
              <Homepage posts={posts} setPosts={setPosts} />
            </Route>
            <Route path="/write">
              <Write
                {...newArticle}
                setNewArticle={setNewArticle}
                handleSubmit={handleSubmit}
              />
            </Route>
            <Route path="/:id">
              <SinglePost posts={posts} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
