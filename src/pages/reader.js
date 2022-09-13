import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '../css/style.css';
import a1 from "../images/jujutsu-kaisen-chapter-191/191 - 01.png"
import a2 from "../images/jujutsu-kaisen-chapter-191/191 - 02 - credits.png"
import a3 from "../images/jujutsu-kaisen-chapter-191/191 - 03.png"
import a4 from "../images/jujutsu-kaisen-chapter-191/191 - 04.png"
import a5 from "../images/jujutsu-kaisen-chapter-191/191 - 05.png"
import a6 from "../images/jujutsu-kaisen-chapter-191/191 - 06.png"
import a7 from "../images/jujutsu-kaisen-chapter-191/191 - 07.png"
import a8 from "../images/jujutsu-kaisen-chapter-191/191 - 08.png"
import a9 from "../images/jujutsu-kaisen-chapter-191/191 - 09.png"
import a10 from "../images/jujutsu-kaisen-chapter-191/191 - 10.png"
import a11 from "../images/jujutsu-kaisen-chapter-191/191 - 11.png"
import a12 from "../images/jujutsu-kaisen-chapter-191/191 - 12.png"
import a13 from "../images/jujutsu-kaisen-chapter-191/191 - 13.png"
import a14 from "../images/jujutsu-kaisen-chapter-191/191 - 14.png"
import a15 from "../images/jujutsu-kaisen-chapter-191/191 - 15.png"
import a16 from "../images/jujutsu-kaisen-chapter-191/191 - 16.png"
import a17 from "../images/jujutsu-kaisen-chapter-191/191 - 17.png"
const Reader = () => {
    return(
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
    );
   }
   
   export default Reader;