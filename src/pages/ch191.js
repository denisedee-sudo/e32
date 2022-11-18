import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../css/style.css';
import {
    Navbar,
    Footer,
    Modals
  } from "../components";
import b1 from "../images/jujutsu-kaisen-chapter-191/191 - 01.png"
import b2 from "../images/jujutsu-kaisen-chapter-191/191 - 02 - credits.png"
import b3 from "../images/jujutsu-kaisen-chapter-191/191 - 03.png"
import b4 from "../images/jujutsu-kaisen-chapter-191/191 - 04.png"
import b5 from "../images/jujutsu-kaisen-chapter-191/191 - 05.png"
import b6 from "../images/jujutsu-kaisen-chapter-191/191 - 06.png"
import b7 from "../images/jujutsu-kaisen-chapter-191/191 - 07.png"
import a8 from "../images/jujutsu-kaisen-chapter-191/191 - 08.png"
import b9 from "../images/jujutsu-kaisen-chapter-191/191 - 09.png"
import b10 from "../images/jujutsu-kaisen-chapter-191/191 - 10.png"
import b11 from "../images/jujutsu-kaisen-chapter-191/191 - 11.png"
import b12 from "../images/jujutsu-kaisen-chapter-191/191 - 12.png"
import b13 from "../images/jujutsu-kaisen-chapter-191/191 - 13.png"
import b14 from "../images/jujutsu-kaisen-chapter-191/191 - 14.png"
import b15 from "../images/jujutsu-kaisen-chapter-191/191 - 15.png"
import b16 from "../images/jujutsu-kaisen-chapter-191/191 - 16.png"
import b17 from "../images/jujutsu-kaisen-chapter-191/191 - 17.png"
const Reader = () => {
    return(
        <div className='container-fluid'>
            <Navbar></Navbar>
            <div className='row bg-secondary'>
                <div className='col-12 invisible-xs'>
                    <img alt="Chapter" src={b1} className="d-block w-100" />
                    <img alt="Chapter" src={b2} className="d-block w-100" />
                    <img alt="Chapter" src={b3} className="d-block w-100" />
                    <img alt="Chapter" src={b4} className="d-block w-100" />
                    <img alt="Chapter" src={b5} className="d-block w-100" />
                    <img alt="Chapter" src={b6} className="d-block w-100" />
                    <img alt="Chapter" src={b7} className="d-block w-100" />
                    <img alt="Chapter" src={b8} className="d-block w-100" />
                    <img alt="Chapter" src={b9} className="d-block w-100" />
                    <img alt="Chapter" src={b10} className="d-block w-100" />
                    <img alt="Chapter" src={b11} className="d-block w-100" />
                    <img alt="Chapter" src={b12} className="d-block w-100" />
                    <img alt="Chapter" src={b13} className="d-block w-100" />
                    <img alt="Chapter" src={b14} className="d-block w-100" />
                    <img alt="Chapter" src={b15} className="d-block w-100" />
                    <img alt="Chapter" src={b16} className="d-block w-100" />
                    <img alt="Chapter" src={b17} className="d-block w-100" />
                </div>
                <div className="col-12 bg-secondary invisible-lg">
                            <div id="BSlide" className="carousel slide" data-bs-touch="true" data-bs-keyboard="true" data-bs-wrap="false" data-bs-interval="false">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img alt="Chapter" src={b1} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={b2} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={b3} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={b4} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={b5} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={b6} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={b7} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={b8} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={b9} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={b10} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={b11} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={b12} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={b13} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={b14} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={b15} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={b16} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={b17} className="d-block w-100" />
                                    </div>
                                </div>
                                {/* Start of Carousel Buttons  */}
                                <button className="carousel-control-prev" type="button" data-bs-target="#BSlide" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                {/* End ofPrev Button */}
                                <button className="carousel-control-next" type="button" data-bs-target="#BSlide" data-bs-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                                {/* End of Next Button */}
                        
                            </div>
                </div>
            </div>
            <Footer></Footer>
            <Modals></Modals>
        </div>
    );
   }
   
   export default Reader;