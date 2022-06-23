import React from 'react';
import Work1Image from './../../shared/_next/static/images/ben.jpg';
import work2Image from './../../shared/_next/static/images/blog-details-45916fda3178e5316c08a27e21ff6417.jpg';
import worl3Image from './../../shared/_next/static/images/carlos.jpg';
import work4Image from './../../shared/_next/static/images/christopher.jpg';
import work6Image from './../../shared/_next/static/images/farzad.jpg';
import FloatingStyle from '../../shared/floatingStyle';


function ProtfolioScreen() {
    return (
        <div >
            <section className="page-title-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Our Latest Project</h2>
                        </div>
                    </div>
                </div>
                <FloatingStyle />
            </section>
            <section className="project-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-project">
                                <div className="project-image"><img src={Work1Image} alt="work" /><a className="popup-btn" href="!#"><i className="icofont-plus"></i></a></div>
                                <div className="project-content"><span>UI/Integration</span>
                                    <h3><a href="!#">Web Development</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-project">
                                <div className="project-image"><img src={work2Image} alt="work" height={200} width={300} /><a className="popup-btn" href="!#"><i className="icofont-plus"></i></a></div>
                                <div className="project-content"><span>UI/Integration</span>
                                    <h3><a href="!#">Android Development</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-project">
                                <div className="project-image"><img src={worl3Image} alt="work" height={200} width={300} /><a className="popup-btn" href="!#"><i className="icofont-plus"></i></a></div>
                                <div className="project-content"><span>Django</span>
                                    <h3><a href="!#">Django Services</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-project">
                                <div className="project-image"><img src={work4Image} alt="work" /><a className="popup-btn" href="!#"><i className="icofont-plus"></i></a></div>
                                <div className="project-content"><span>AI</span>
                                    <h3><a href="!#">Artifical Intelligence</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-project">
                                <div className="project-image"><img src={work6Image} alt="work" /><a className="popup-btn" href="!#"><i className="icofont-plus"></i></a></div>
                                <div className="project-content"><span>Electron</span>
                                    <h3><a href="!#">Desktop Application</a></h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-project">
                                <div className="project-image"><img src={work6Image} alt="work" height={200} width={300} /><a className="popup-btn" href="!#"><i className="icofont-plus"></i></a></div>
                                <div className="project-content"><span>R&A</span>
                                    <h3><a href="!#">React & Angular</a></h3>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item"><a className="page-link" href="!#"><i className="icofont-double-left"></i></a></li>
                                        <li className="page-item active"><a className="page-link" href="!#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="!#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="!#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="!#"><i className="icofont-double-right"></i></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ProtfolioScreen;