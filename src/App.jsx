import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Css from "./components/Css";
import Js from "./components/Js";
import Html from "./components/Html";
import Home from "./components/Home";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="js">About</Link>
            </li>
            <li>
              <Link to="html">Users</Link>
            </li>
            <li>
              <Link to="css">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="css" element={<Css />} />
          <Route path="js" element={<Js />} />
          <Route path="html" element={<Html />} />
        </Routes>
      </div>
    </Router>
  );
}
