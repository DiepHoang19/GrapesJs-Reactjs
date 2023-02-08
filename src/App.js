import React from "react";
import "./styles/main.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Builder from "./Components/Builder/Builder";
import Demo from "./Components/Demo/Demo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Builder />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </Router>
  );
}

export default App;
