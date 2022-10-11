import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
import {
  Home,
  Manga,
  Reader
} from "./components/index";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/e32" element={<Home />} />
      <Route path="/e32/Manga" element={<Manga />} />
      <Route path="/e32/Reader" element={<Reader />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);
