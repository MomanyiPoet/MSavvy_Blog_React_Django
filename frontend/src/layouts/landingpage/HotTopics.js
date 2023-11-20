import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import aibestfriend from "../../assets/images/aibestfriend.webp";
import frontend from "../../assets/images/frontend.webp";
import uiux from "../../assets/images/uiux.webp";
import backend from "../../assets/images/backend.webp";

const HotTopics = () => {
    const [topiccards] = useState([
        {
            image: aibestfriend,
            title: "AI Best Friend",
            articles: 5,
            id: 1
        },
        {
            image: frontend,
            title: "Front-end Development",
            articles: 5,
            id: 2
        },
        {
            image: uiux,
            title: "UI/UX Design",
            articles: 5,
            id: 3
        },
        {
            image: backend,
            title: "Back_end Development",
            articles: 5,
            id: 4
        }
    ]);

    return (
        <section className="py-3 pt-6" id="categories">
            <div className="container">
                <div className="row">
                    <div className="text-center">
                        <h3 className="mb-3">Hot Topics</h3>
                    </div>
                </div>

                <div className="row">
                    {topiccards.map((topiccard) => (
                        <div className="col-xl-3 col-sm-6 col-12 my-2" key={topiccard.id}>
                            <Link to="/categories">
                                <div className="card card-blog card-background">
                                    <div className="full-background" style={{ backgroundImage: `url(${topiccard.image})` }} loading="lazy">
                                        <span className="mask bg-gradient-dark opacity-4 border-radius-xl"></span>
                                    </div>
                                    <div className="card-body">
                                        <div className="content-bottom text-end">
                                            <h6 className="text-white">{topiccard.title}</h6>
                                            <p className="text-sm">{topiccard.articles} Articles</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default HotTopics;