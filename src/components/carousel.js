import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../css/style.css';
import C1 from '../images/HollowPurple.jpg'
import C2 from '../images/Big 3.jpg'
import C3 from '../images/Welcome Banner.png'
const Carousel = () => {
    return(
        <div className="col-12 bg-dark">
            <div id="Slide" className="carousel slide" data-touch="true" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button data-bs-target="#Slide" data-bs-slide-to="0" className="active"></button>
                    <button data-bs-target="#Slide" data-bs-slide-to="1"></button>
                    <button data-bs-target="#Slide" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img alt="carousel" src={C1} className="d-block w-100"></img>
                    </div>
                    <div className="carousel-item">
                        <img alt="carousel" src={C2} className="d-block w-100" ></img>
                    </div>
                    <div className="carousel-item">
                        <img alt="carousel" src={C3} className="d-block w-100"></img>
                    </div>
                </div>
                {/* Start of Carousel Buttons */}
                <button className="carousel-control-prev" type="button" data-bs-target="#Slide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                {/* End ofPrev Button */}
                <button className="carousel-control-next" type="button" data-bs-target="#Slide" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
   }
   
export default Carousel;