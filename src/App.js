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
          <div>
            <ul className="navbar">
              <li>
                <Link to="/shift-report">Home</Link>
              </li>
              <li>
                <Link to="/shift-report/get">Get Report</Link>
              </li>
              {/* <li className="right">
                <Link to="/shift-report/get">Contact Me</Link>
              </li> */}
            </ul>
          </div>

          <Routes>
            <Route exact path="/shift-report" element={<Home />} />
            <Route exact path="/shift-report/get" element={<GetReport />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
