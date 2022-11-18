import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
    Carousel,
    Content
  } from "../components";
import '../css/style.css';
const Home = () => {
    return(
        <div className='bg-dark'>
            <Carousel></Carousel>
            <Content className="m-1"></Content>
        </div>
    );
   }
   
   export default Home;