import React from 'react';
import images from './../../shared/_next/static/images/3-76759de2453f1b3cd48ecf7b1ef49da1.png';

function JoinArea() {
    return (
        <div >
            <section className="join-area ptb-100">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="join-img"><img src={images}
                                alt="img" /></div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="join-content"><span>Start 30 Days Free Trial</span>
                                <h3>Overall 400k+ Our Clients! Please Get Start Now</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo.</p><a className="btn"
                                    href="!#">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default JoinArea;