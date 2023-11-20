import React, { useState } from 'react'

import bg1 from "../../assets/images/bg1.webp";
import bg21 from "../../assets/images/bg21.webp"
import cover from "../../assets/images/cover.png";
import dp from "../../assets/images/dp.webp"

const CategoryPosts = () => {
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
    <section class="py-3 pt-xl-6" id="categoryposts">
        <div class="container">
            <div class="row">
                <div class="col-xl-7 col-lg-9 col-12 mx-auto">
                    {/* SEARCH DISPLAY SM */}
                    <div class="row mt-xl-4 mb-6 d-xl-none shadow-xl">
                        <div class="col-12">
                
                            <form action="">
                                <div class="input-group">
                                    <input type="search" class="form-control" placeholder="Search" aria-label="Search"
                                        aria-describedby="button-addon2" />
                                    <button class="btn btn-info btn-lg" type="button" id="button-addon2">
                                        <i class="fas fa-search"></i>
                                    </button>
                                </div>
                            </form>
                
                        </div>
                    </div>

                    <div class="card card-profile shadow-lg mt-4 mb-6">
                        <a href="pages.html">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-12 mt-n5">
                                    <div class="p-3 pe-md-0">
                                        <img class="w-100 border-radius-md shadow-lg" src={bg1} alt="categoryimage" />
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-6 col-12 my-auto">
                                    <div class="card-body ps-lg-0">
                                        <h5 class="mb-0">Helpful Tips for Working from Home as a Freelancer</h5>
                                        <p class="mb-0">
                                            Gosh jaguar ostrich quail one excited dear hello and
                                            bound and the and bland moral misheard roadrunner flapped
                                            lynx far that and jeepers giggled far and far
                                        </p>
                                        <div class="mt-3 d-flex justify-content-between">
                                            <h6 class="text-xs opacity-6">#css#coding</h6>
                                            <h6 class="text-xs opacity-6"><i class="fas fa-clock text-xxs"></i> 3 mins read</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="card card-profile shadow-lg mt-4 mb-6">
                        <a href="pages.html">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-12 mt-n5">
                                    <div class="p-3 pe-md-0">
                                        <img class="w-100 border-radius-md shadow-lg" src={bg1} alt="categoryimage" />
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-6 col-12 my-auto">
                                    <div class="card-body ps-lg-0">
                                        <h5 class="mb-0">Helpful Tips for Working from Home as a Freelancer</h5>
                                        <p class="mb-0">
                                            Gosh jaguar ostrich quail one excited dear hello and
                                            bound and the and bland moral misheard roadrunner flapped
                                            lynx far that and jeepers giggled far and far
                                        </p>
                                        <div class="mt-3 d-flex justify-content-between">
                                            <h6 class="text-xs opacity-6">#css#coding</h6>
                                            <h6 class="text-xs opacity-6"><i class="fas fa-clock text-xxs"></i> 3 mins read</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="card card-profile shadow-lg mt-4 mb-6">
                        <a href="pages.html">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-12 mt-n5">
                                    <div class="p-3 pe-md-0">
                                        <img class="w-100 border-radius-md shadow-lg" src={bg1} alt="categoryimage" />
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-6 col-12 my-auto">
                                    <div class="card-body ps-lg-0">
                                        <h5 class="mb-0">Helpful Tips for Working from Home as a Freelancer</h5>
                                        <p class="mb-0">
                                            Gosh jaguar ostrich quail one excited dear hello and
                                            bound and the and bland moral misheard roadrunner flapped
                                            lynx far that and jeepers giggled far and far
                                        </p>
                                        <div class="mt-3 d-flex justify-content-between">
                                            <h6 class="text-xs opacity-6">#css#coding</h6>
                                            <h6 class="text-xs opacity-6"><i class="fas fa-clock text-xxs"></i> 3 mins read</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                    <div class="card card-profile shadow-lg mt-4 mb-6">
                        <a href="pages.html">
                            <div class="row">
                                <div class="col-lg-4 col-md-6 col-12 mt-n5">
                                    <div class="p-3 pe-md-0">
                                        <img class="w-100 border-radius-md shadow-lg" src={bg1} alt="categoryimage" />
                                    </div>
                                </div>
                                <div class="col-lg-8 col-md-6 col-12 my-auto">
                                    <div class="card-body ps-lg-0">
                                        <h5 class="mb-0">Helpful Tips for Working from Home as a Freelancer</h5>
                                        <p class="mb-0">
                                            Gosh jaguar ostrich quail one excited dear hello and
                                            bound and the and bland moral misheard roadrunner flapped
                                            lynx far that and jeepers giggled far and far
                                        </p>
                                        <div class="mt-3 d-flex justify-content-between">
                                            <h6 class="text-xs opacity-6">#css#coding</h6>
                                            <h6 class="text-xs opacity-6"><i class="fas fa-clock text-xxs"></i> 3 mins read</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>

                </div>
                
                <div class="col-xl-5 col-lg-8 col-12 mx-auto">
                    {/* SEARCH DISPLAY XL */}
                    <div class="row mb-3 d-xl-block d-none shadow-xl">
                        <div class="col-12">
                
                            <form action="">
                                <div class="input-group">
                                    <input type="search" class="form-control" placeholder="Search" aria-label="Search"
                                        aria-describedby="button-addon2" />
                                    <button class="btn btn-info btn-lg" type="button" id="button-addon2">
                                        <i class="fas fa-search"></i>
                                    </button>
                                </div>
                            </form>
                
                        </div>
                    </div>

                    {/* FEATURES */}
                    <div class="row">
                        <div class="col-12">
                            <h4 class="mb-2 text-center">Featured and highly rated Articles</h4>
                        </div>
                    </div>

                    <div class="row">
                        {featuredCards.map((featuredCard) => (
                            <div class="card card-plain shadow-xl pt-2 px-3 my-3" key={featuredCard.id}>
                                <div class="card-header p-0 position-relative">
                                    <a href='#categoryposts' class="d-block blur-shadow-image">
                                        <img src={featuredCard.displayImage} alt="featuresimage"
                                            class="img-fluid shadow border-radius-lg" loading="lazy" />
                                    </a>
                                    <div class="mt-3 d-flex justify-content-between">
                                        <h6 class="text-xs opacity-6">{featuredCard.tags}</h6>
                                        <h6 class="text-xs opacity-6"><i class="fas fa-clock text-xxs"></i> {featuredCard.readingTime} mins read</h6>
                                    </div>
                                </div>
                                <div class="card-body px-0">
                                    <h5 class="text-dark font-weight-bold mb-3">{featuredCard.title}</h5>
                                    <div class="d-flex justify-content-between align-items-end">
                                        <div class="row">
                                            <div class="col-4">
                                                <img class="avatar avatar-sm shadow-xl position-relative z-index-2" src={featuredCard.authorImage} alt="dp" loading="lazy" />
                                            </div>
                                            <div class="col-8 d-flex align-items-end ms-n1">
                                                <p class="text-xs fw-bold">{featuredCard.author} <br /> {featuredCard.date}</p>
                                            </div>
                                        </div>
                                        <a href="pages.html">
                                            <p class="text-info text-xs icon-move-right">Read More
                                                <i class="fas fa-arrow-right text-xs ms-1"></i>
                                            </p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default CategoryPosts;