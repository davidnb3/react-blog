import Homepage from "./pages/Homepage";
import Write from "./pages/Write";
import SinglePost from "./components/SinglePost";
import Navbar from "./components/Navbar";
import { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [posts, setPosts] = useState([]);

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
              <Write />
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
