import profile2 from "../../assets/images/profile2.webp";

const ContactUs = () => {
    return (
        <section className="py-3 pt-6" id="contact">
            <div className="container">
                <div className="row">
                    <div className="mb-2 mt-5 text-center">
                        <h3 className="z-index-1 position-relative">Enjoying our Content</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-12 p-3 d-flex justify-content-center align-items-center">
                        <img src={profile2} className="w-lg-100 w-md-60 w-80" alt="contact us"/>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-6 mb-5">
                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                                <div className="bg-gradient-info shadow-info border-radius-lg p-3">
                                    <h3 className="text-white text-primary text-center mb-0">Contact us</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <p className="pb-3">
                                    For further questions, including partnership opportunities, please use our contact form.
                                </p>
                                <form id="contact-form" method="post" autocomplete="off">
                                    <div className="card-body p-0 my-3">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="input-group input-group-static mb-4">
                                                    <label>Full Name</label>
                                                    <input type="email" className="form-control" placeholder="I am ..."/>
                                                </div>
                                            </div>
                                            <div className="col-md-6 ps-md-2">
                                                <div className="input-group input-group-static mb-4">
                                                    <label>Email</label>
                                                    <input type="email" className="form-control" placeholder="hello@email.com"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group mb-0 mt-md-0 mt-4">
                                            <div className="input-group input-group-static mb-4">
                                                <label>Message</label>
                                                <textarea name="message" className="form-control" id="message" rows="6"
                                                    placeholder="I would like to ..."></textarea>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <button type="submit" className="btn bg-gradient-info mt-3 mb-0">Send
                                                    Message</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs;