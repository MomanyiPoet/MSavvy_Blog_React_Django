import React from 'react'
import carousel1 from '../../assets/images/cover.png';
import carousel2 from '../../assets/images/frontend.webp';
import carousel3 from '../../assets/images/backend.webp';

const CarouselSlider = () => {
  return (
    <section id="carouselChange">
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={carousel1} className="d-block w-100" alt="..." />
                                <span className="mask bg-gradient-dark opacity-8"></span>
                                <div className="carousel-caption">
                                    <h2 className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={carousel2} className="d-block w-100" alt="..." />
                                <span className="mask bg-gradient-dark opacity-8"></span>
                                <div className="carousel-caption">
                                    <h2 className="text-white">Lorem, ipsum dolor sit amet.</h2>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={carousel3} className="d-block w-100" alt="..." />
                                <span className="mask bg-gradient-dark opacity-8"></span>
                                <div className="carousel-caption">
                                    <h2 className="text-white">Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CarouselSlider;