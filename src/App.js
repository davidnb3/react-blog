import Homepage from "./pages/Homepage";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import { useState } from "react";
import "./app.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  const [article, setArticle] = useState({
    title: "",
    author: "",
    body: "",
    topic: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location = "/";
  };

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
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
