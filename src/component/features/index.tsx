import React from 'react';
import FloatingStyle from '../../shared/floatingStyle';

function Features() {
    return (
        <div>
            <section className="features-area saas-features ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Amazing Features</h2>
                        <div className="bar"></div>
                        <p>From startup to enterprise, the full range of engineering services your company needs.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon"><i className="icofont-lock"></i></div>
                                <h3>Web Development</h3>
                                <p>We manage front-end and back-end solutions, custom-made for the client while guaranteeing quality and security.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon"><i className="icofont-heart-eyes"></i></div>
                                <h3>Dijango</h3>
                                <p>Django was developed in a fast-paced newsroom environment, it was designed to make common Web-development tasks fast and easy.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon"><i className="icofont-lock"></i></div>
                                <h3>Android Development</h3>
                                <p>US consumers spend nearly a quarter of their day on their mobile phone – and 92% of that time is spent using apps.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon"><i className="icofont-camera"></i></div>
                                <h3>Desktop Applications</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon"><i className="icofont-responsive"></i></div>
                                <h3>Web Solutions</h3>
                                <p>Our engineers create custom web scraping solutions that quickly and efficiently gather the data you need and provide it to you in an elegant structure.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-features">
                                <div className="icon"><i className="icofont-hand-drag1"></i></div>
                                <h3>Artificial intelligence</h3>
                                <p>We provide intelligent solutions that exercise intelligent knowledge engineering techniques and produce beneficial results which assist our clients to increase their potential.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <FloatingStyle />
            </section>
        </div>
    );
}

export default Features;