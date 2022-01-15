import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import GetReport from "./pages/getReport";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/get">Get Report</Link>
            </li>
          </ul>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/get" element={<GetReport />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
