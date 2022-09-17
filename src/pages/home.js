import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import Navbar from './components/navbar';
// import Footer from './components/footer';
// import Modals from './components/modals';
// import Carousel from './components/carousel';
// import Content from './components/content';
import {
    Navbar,
    Footer,
    Carousel,
    Content,
    Modals
  } from "../components";
import '../css/style.css';
const Home = () => {
    return(
        <div className='container-fluid bg-dark'>
            <Navbar></Navbar>
            <br /><br /><br /><br />
            <Carousel></Carousel>
            <Content></Content>
            <Footer></Footer>
            <Modals></Modals>
        </div>
    );
   }
   
   export default Home;