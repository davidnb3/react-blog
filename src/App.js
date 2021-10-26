import Homepage from "./pages/Homepage";
import Write from "./pages/Write";
import Navbar from "./components/Navbar";
import "./app.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/write">
            <Write />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
