import React from 'react';
import ReactDOM from "react-dom";
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
// import ReactDOM from 'react-dom/client';
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
// import HeadingPart from './components/HeadingPart';
// import ImageLayout from './components/ImageLayout';
// import Navbar from './components/navbar';
// import Footer from './components/footer';
// import Modals from './components/modals';
// import Carousel from './components/carousel';
// import Content from './components/content';
// import Manga from './pages/manga';
// import Reader from './pages/reader';
import {
  Home,
  Manga,
  Reader
} from "./components/index";
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Manga" element={<Manga />} />
      <Route path="/Reader" element={<Reader />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

// serviceWorker.unregister();
