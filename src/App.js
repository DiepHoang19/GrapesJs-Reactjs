import React from "react";
import "./styles/main.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Builder from "./Components/Builder/Builder";



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/builder" element={<Builder />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
