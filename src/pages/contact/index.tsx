import React from 'react';
import FloatingStyle from '../../shared/floatingStyle';
import marketing from './../../shared/_next/static/images/marketing-030523e8624d4dddd91543a7504c9491.png';

function ContactScreen() {
    return (
        <div >
            <section className="page-title-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Contact Us</h2>
                        </div>
                    </div>
                </div>
                <FloatingStyle />
            </section>
            <section className="contact-info-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon"><i className="icofont-email"></i></div>
                                <h3>Mail Here</h3>
                                <p><a href="!#"><span className="__cf_email__" data-cfemail="5736333a3e39173425363c327934383a">[email&#160;protected]</span></a></p>
                                <p><a href="!#"><span className="__cf_email__" data-cfemail="e980878f86a98a9b88828cc78a8684">[email&#160;protected]</span></a></p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-box">
                                <div className="icon"><i className="icofont-google-map"></i></div>
                                <h3>Visit Here</h3>
                                <p>1660 Travis Street Miramar, FL 33025, California</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="contact-info-box">
                                <div className="icon"><i className="icofont-phone"></i></div>
                                <h3>Call Here</h3>
                                <p><a href="!#">+123 456 7890</a></p>
                                <p><a href="!#">+241 452 4526</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-area ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Get In Touch With Us</h2>
                        <div className="bar"></div>
                        <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
                    </div>
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-12"><img src={marketing} alt="" /></div>
                        <div className="col-lg-6 col-md-12">
                            <form id="contactForm">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group"><input type="text" className="form-control" required={true} data-error="Please enter your name" placeholder="Name" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group"><input type="email" className="form-control" required={true} data-error="Please enter your email" placeholder="Email" />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group"><input type="text" className="form-control" placeholder="Phone" /></div>
                                    </div>
                                    <div className="col-lg-12 col-md-6">
                                        <div className="form-group"><input type="text" className="form-control" placeholder="Subject" /></div>
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="form-group"><textarea name="message" className="form-control" id="message" cols={30} rows={5} required={true} data-error="Write your message" placeholder="Your Message"></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 col-md-12"><button type="submit" className="btn">Send Message</button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactScreen;