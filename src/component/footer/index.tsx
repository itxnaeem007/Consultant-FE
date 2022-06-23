import React from 'react';

function Footer() {
    return (
        <div>
            <footer className="footer-area ptb-100 pb-0 bg-image">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget"><a className="logo" href="!#">
                                <h3 style={{ color: 'gray', fontFamily: 'monospace', fontWeight: 'bolder' }}>Ch-Consultant</h3>
                            </a>
                                <p>Plan ahead by day, week, or month, and see project status at a glance. Search and filter
                                to focus in on anything form a single project individual.</p>
                                <ul className="social-list">
                                    <li><a href="!#"><i className="icofont-facebook"></i></a></li>
                                    <li><a href="!#"><i className="icofont-twitter"></i></a></li>
                                    <li><a href="!#"><i className="icofont-instagram"></i></a></li>
                                    <li><a href="!#"><i className="icofont-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Company</h3>
                                <ul className="list">
                                    <li><a href="/about">About</a></li>
                                    <li><a href="!#">Carrers</a></li>
                                    <li><a href="!#">Awards</a></li>
                                    <li><a href="!#">User Program</a></li>
                                    <li><a href="!#">Locations</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Products</h3>
                                <ul className="list">
                                    <li><a href="!#">Integrations</a></li>
                                    <li><a href="!#">API</a></li>
                                    <li><a href="!#">Pricing</a></li>
                                    <li><a href="!#">Documentation</a></li>
                                    <li><a href="!#">Release Notes</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Support</h3>
                                <ul className="list">
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                    <li><a href="/faq">FAQ</a></li>
                                    <li><a href="/blog/login">Login</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row h-100 justify-content-center align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>Copyright @ 2021 Crake. All rights reserved</p>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li><a href="!#">Terms &amp; Conditions</a></li>
                                    <li><a href="!#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <div>
            <div className="preloader-area">
                <div className="lds-hourglass"></div>
            </div>
        </div> */}
        </div>
    );
}

export default Footer;