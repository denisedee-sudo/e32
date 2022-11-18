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
import {
  Navbar,
  Footer,
  Modals
} from "./components";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router className="container-fluid">
    <Navbar></Navbar>
    <br /><br /><br />
    <Routes>
      <Route path="/e32" element={<Home />} />
      <Route path="/e32/Manga" element={<Manga />} />
      <Route path="/e32/Reader" element={<Reader />} />
    </Routes>
    <Footer></Footer>
    <Modals></Modals>
  </Router>,

  document.getElementById("root")
);
