import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../css/style.css';
import a1 from "../images/jujutsu-kaisen-chapter-204/204 - 01.jpg"
import a2 from "../images/jujutsu-kaisen-chapter-204/204 - 02.jpg"
import a3 from "../images/jujutsu-kaisen-chapter-204/204 - 03.jpg"
import a4 from "../images/jujutsu-kaisen-chapter-204/204 - 04.jpg"
import a5 from "../images/jujutsu-kaisen-chapter-204/204 - 05.jpg"
import a6 from "../images/jujutsu-kaisen-chapter-204/204 - 06.jpg"
import a7 from "../images/jujutsu-kaisen-chapter-204/204 - 07.jpg"
import a8 from "../images/jujutsu-kaisen-chapter-204/204 - 08.jpg"
import a9 from "../images/jujutsu-kaisen-chapter-204/204 - 09.jpg"
import a10 from "../images/jujutsu-kaisen-chapter-204/204 - 10.jpg"
import a11 from "../images/jujutsu-kaisen-chapter-204/204 - 11.jpg"
import a12 from "../images/jujutsu-kaisen-chapter-204/204 - 12.jpg"
import a13 from "../images/jujutsu-kaisen-chapter-204/204 - 13.jpg"
import a14 from "../images/jujutsu-kaisen-chapter-204/204 - 14.jpg"
import a15 from "../images/jujutsu-kaisen-chapter-204/204 - 15.jpg"
import a16 from "../images/jujutsu-kaisen-chapter-204/204 - 16.jpg"
import a17 from "../images/jujutsu-kaisen-chapter-204/204 - 17.jpg"
import a18 from "../images/jujutsu-kaisen-chapter-204/204 - 18.jpg"
import a19 from "../images/jujutsu-kaisen-chapter-204/204 - 19.jpg"
const Reader = () => {
    return(
        <div className='container-fluid'>
            <div className='row bg-secondary'>
                <div className='col-12 invisible-xs'>
                    <img alt="Chapter" src={a1} className="d-block w-100" />
                    <img alt="Chapter" src={a2} className="d-block w-100" />
                    <img alt="Chapter" src={a3} className="d-block w-100" />
                    <img alt="Chapter" src={a4} className="d-block w-100" />
                    <img alt="Chapter" src={a5} className="d-block w-100" />
                    <img alt="Chapter" src={a6} className="d-block w-100" />
                    <img alt="Chapter" src={a7} className="d-block w-100" />
                    <img alt="Chapter" src={a8} className="d-block w-100" />
                    <img alt="Chapter" src={a9} className="d-block w-100" />
                    <img alt="Chapter" src={a10} className="d-block w-100" />
                    <img alt="Chapter" src={a11} className="d-block w-100" />
                    <img alt="Chapter" src={a12} className="d-block w-100" />
                    <img alt="Chapter" src={a13} className="d-block w-100" />
                    <img alt="Chapter" src={a14} className="d-block w-100" />
                    <img alt="Chapter" src={a15} className="d-block w-100" />
                    <img alt="Chapter" src={a16} className="d-block w-100" />
                    <img alt="Chapter" src={a17} className="d-block w-100" />
                    <img alt="Chapter" src={a18} className="d-block w-100" />
                    <img alt="Chapter" src={a19} className="d-block w-100" />
                </div>
                <div className="col-12 bg-secondary invisible-lg">
                            <div id="BSlide" className="carousel slide" data-bs-touch="true" data-bs-keyboard="true" data-bs-wrap="false" data-bs-interval="false">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img alt="Chapter" src={a1} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a2} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a3} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a4} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a5} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a6} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a7} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a8} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a9} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a10} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a11} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a12} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a13} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a14} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a15} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a16} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a17} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a18} className="d-block w-100" />
                                    </div>
                                    <div className="carousel-item">
                                        <img alt="Chapter" src={a19} className="d-block w-100" />
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
        </div>
    );
   }
   
   export default Reader;