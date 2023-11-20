import cover from "../../assets/images/cover.png";
import bg1 from "../../assets/images/bg1.webp"

import React, { useState, useEffect  } from 'react';

const RecentPosts = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // Fetch Articles
        fetch('http://localhost:8000/api/article/')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    return (
        <section className="py-3 pt-6" id="recents">
            <div className="container">
                <div className="row">
                <div className="mb-5 mt-5 text-center">
                    <h3 className="z-index-1 position-relative">Recent Posts</h3>
                    <h5>Don't miss the latest trends</h5>
                </div>
                </div>

                <div className="row">
                    <div className="col-xl-7 col-lg-9 col-12 mx-auto">

                        {articles.map((article) => (
                            <div className="card card-profile shadow-lg mt-4 mb-6" key={article.id}>
                                <a href="#recents" className="icon-link">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6 col-12 mt-n5">
                                            <div className="p-3 pe-md-0">
                                                <img className="w-100 border-radius-md shadow-lg" src={article.image} alt="postimage" />
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-6 col-12 my-auto">
                                            <div className="card-body ps-lg-0">
                                                <h5 className="mb-0">{article.title}</h5>
                                                <p className="mb-0">
                                                    {article.content.length > 100 ? `${article.content.substring(0, 100)}...` : article.content}
                                                </p>
                                                <div className="mt-3 d-flex justify-content-between">
                                                    <h6 className="text-xs opacity-6">{article.tags}</h6>
                                                    <h6 className="text-xs opacity-6"><i className="fas fa-clock text-xxs"></i> {article.readingtime} mins read </h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="col-xl-5 col-lg-8 col-12 mx-auto" >
                        <div className="card card-plain shadow-lg mt-4 p-4">
                            <div className="row">
                                <div className="fw-bold">
                                    <h4>Popular Posts</h4>
                                    <hr className="border border-dark border-1 opacity-2" />
                                </div>
                            </div>

                            <a href="#recents">
                                <div className="row py-2">
                                    <div className="col-sm-2 col-4">
                                        <img className="avatar avatar-xl shadow-xl position-relative z-index-2" src={cover} alt="dp" loading="lazy" />
                                    </div>
                                    <div className="col-sm-10 col-8 d-flex flex-column align-items-start justify-content-center">
                                        <h6 className="px-xl-2">Creating is a privilege but it’s also a gift</h6>
                                        <h6 className="px-xl-2 text-xs opacity-6 text-end">5 Sep 2023 <i className="fas fa-clock text-xxs"></i> 3 mins read</h6>
                                    </div>
                                </div>
                            </a>
                            <hr className="border border-dark border-1 opacity-1"></hr>

                            <a href="#recents">
                                <div className="row py-2">
                                    <div className="col-sm-2 col-4">
                                        <img className="avatar avatar-xl shadow-xl position-relative z-index-2" src={cover} alt="dp" loading="lazy"/>
                                    </div>
                                    <div className="col-sm-10 col-8 d-flex flex-column align-items-start justify-content-center">
                                        <h6 className="px-xl-2">Creating is a privilege but it’s also a gift</h6>
                                        <h6 className="px-xl-2 text-xs opacity-6 text-end">5 Sep 2023 <i className="fas fa-clock text-xxs"></i> 3 mins read</h6>
                                    </div>
                                </div>
                            </a>
                            <hr className="border border-dark border-1 opacity-1" />

                            <a href="#recents">
                                <div className="row py-2">
                                    <div className="col-sm-2 col-4">
                                        <img className="avatar avatar-xl shadow-xl position-relative z-index-2" src={cover} alt="dp" loading="lazy" />
                                    </div>
                                    <div className="col-sm-10 col-8 d-flex flex-column align-items-start justify-content-center">
                                        <h6 className="px-xl-2">Creating is a privilege but it’s also a gift</h6>
                                        <h6 className="px-xl-2 text-xs opacity-6 text-end">5 Sep 2023 <i className="fas fa-clock text-xxs"></i> 3 mins read</h6>
                                    </div>
                                </div>
                            </a>
                            <hr className="border border-dark border-1 opacity-1"></hr>

                        </div>

                        <div className="card card-plain shadow-lg mt-4 p-4">
                            <div className="row">
                                <div className="fw-bold">
                                    <h4>Latest Comments</h4>
                                    <hr className="border border-dark border-1 opacity-2" />
                                </div>
                            </div>

                            <div className="row py-2">
                                <div className="col">
                                    <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, obcaecati? "</p>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2 col-4">
                                        <img className="avatar avatar-lg shadow-xl position-relative z-index-2" src={cover} alt="dp" loading="lazy"/>
                                    </div>
                                    <div className="col-sm-10 col-8 d-flex flex-column align-items-start justify-content-center">
                                        <h6 className="px-xl-2">John Doe</h6>
                                        <h6 className="px-xl-2 text-xs opacity-6 text-end">5 Sep 2023</h6>
                                    </div>
                                </div>
                            </div>
                            <hr className="border border-dark border-1 opacity-1" />

                            <div className="row py-2">
                                <div className="col">
                                    <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, obcaecati? "</p>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2 col-4">
                                        <img className="avatar avatar-lg shadow-xl position-relative z-index-2" src={cover} alt="dp" loading="lazy"/>
                                    </div>
                                    <div className="col-sm-10 col-8 d-flex flex-column align-items-start justify-content-center">
                                        <h6 className="px-xl-2">John Doe</h6>
                                        <h6 className="px-xl-2 text-xs opacity-6 text-end">5 Sep 2023</h6>
                                    </div>
                                </div>
                            </div>
                            <hr className="border border-dark border-1 opacity-1" />

                            <div className="row py-2">
                                <div className="col">
                                    <p>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, obcaecati? "</p>
                                </div>
                                <div className="row">
                                    <div className="col-sm-2 col-4">
                                        <img className="avatar avatar-lg shadow-xl position-relative z-index-2" src={cover} alt="dp" loading="lazy"/>
                                    </div>
                                    <div className="col-sm-10 col-8 d-flex flex-column align-items-start justify-content-center">
                                        <h6 className="px-xl-2">John Doe</h6>
                                        <h6 className="px-xl-2 text-xs opacity-6 text-end">5 Sep 2023</h6>
                                    </div>
                                </div>
                            </div>
                            <hr className="border border-dark border-1 opacity-1" />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecentPosts;