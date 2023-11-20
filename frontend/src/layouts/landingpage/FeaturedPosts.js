import React, { useState } from 'react';

import bg21 from "../../assets/images/bg21.webp"
import cover from "../../assets/images/cover.png";
import dp from "../../assets/images/dp.webp"

const FeaturedPosts = () => {
    const [featuredCards, setFeaturedCards] = useState([
        {
            displayImage: bg21,
            tags: "#css#coding",
            readingTime: 3,
            title: "Bootstrap Your Projects",
            author: "Admin",
            authorImage: dp,
            date:"5 Sep 2023",
            id: 1,
        },
        {
            displayImage: cover,
            tags: "#js#coding",
            readingTime: 4,
            title: "How to make Use of Tailwind",
            author: "Admin",
            authorImage: dp,
            date:"6 Sep 2023",
            id: 2,
        },
        {
            displayImage: bg21,
            tags: "#react#tailwindcss",
            readingTime: 5,
            title: "CSS Center Div",
            author: "Admin",
            authorImage: dp,
            date:"7 Sep 2023",
            id: 3,
        },
    ]);

    return (
        <section className="py-3 pt-6" id="features">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <h3 className="mb-2 text-sm-start text-center">Featured and highly Rated Articles</h3>
                    </div>
                </div>
                <div className="row">
                    {featuredCards.map((featuredCard) => (
                        <div className="col-lg-4 col-sm-6" key={featuredCard.id}>
                            <div className="card card-plain shadow-xl pt-2 px-3 my-1">
                                <div className="card-header p-0 position-relative">
                                    <a className="d-block blur-shadow-image" href="#header">
                                        <img src={featuredCard.displayImage} alt="postimage"
                                            className="img-fluid shadow border-radius-lg" loading="lazy" />
                                    </a>
                                    <div className="mt-3 d-flex justify-content-between">
                                        <h6 className="text-xs opacity-6">{featuredCard.tags}</h6>
                                        <h6 className="text-xs opacity-6"><i className="fas fa-clock text-xxs"></i> {featuredCard.readingTime} mins read</h6>
                                    </div>
                                </div>
                                <div className="card-body px-0">
                                    <h5 className="text-dark font-weight-bold mb-3">{featuredCard.title}</h5>
                                    <div className="d-flex justify-content-between align-items-end">
                                        <div className="row">
                                            <div className="col-4">
                                                <img className="avatar avatar-sm shadow-xl position-relative z-index-2" src={featuredCard.authorImage} alt="dp" loading="lazy" />
                                            </div>
                                            <div className="col-8 d-flex align-items-end ms-n1">
                                                <p className="text-xs fw-bold">{featuredCard.author} <br /> {featuredCard.date}</p>
                                            </div>
                                        </div>
                                        <a href="#header">
                                            <p className="text-info text-xs icon-move-right">Read More
                                                <i className="fas fa-arrow-right text-xs ms-1"></i>
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default FeaturedPosts;