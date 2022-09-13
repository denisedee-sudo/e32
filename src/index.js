import React from 'react';
// import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import './index.css';
// import HeadingPart from './components/HeadingPart';
// import ImageLayout from './components/ImageLayout';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Modals from './components/modals';
import Carousel from './components/carousel';
import Content from './components/content';
// import Modals from './components/modals';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <body className='container-fluid bg-dark'>
      <Navbar></Navbar>
      <br /><br /><br /><br />
      <Carousel></Carousel>
      <Content></Content>
      <Footer></Footer>
      <Modals></Modals>
    </body>
    
    {/* <HeadingPart></HeadingPart>
    <ImageLayout /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
