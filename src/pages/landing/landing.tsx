import React from 'react';
import features from './../../shared/_next/static/images/features-img1-16fbd70fb8ea0052876308707faaa8be.png';
import featuresImage2 from './../../shared/_next/static/images/features-img2-87d856a0928d47495a5c5a9b56d08112.png';
import Features from '../../component/features';
import OverView from '../../component/overview';
import HeroArea from '../../component/heroArea';
import FloatingStyle from '../../shared/floatingStyle';

function LandingScreen() {
  return (
    <div >
      <HeroArea />
      <Features />
      {/* <OverView /> */}
      {/* <JoinArea /> */}
      <div className="cta-area">
        <div className="container">
          <div className="row h-100 justify-content-center align-items-center">
            <div className="col-lg-7 col-md-7">
              <p>Want a bite? You&#x27;re in the right place!</p>
            </div>
            <div className="col-lg-5 col-md-5 text-right"><a className="btn" href="!#">Take a Test Drive</a>
            </div>
          </div>
        </div>
      </div>
      {/* <section className="saas-tools ptb-100 bg-gray">
        <div className="container">
          <div className="section-title">
            <h2>Tools for Everyone</h2>
            <div className="bar"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="tab">
                <ul className="tabs active">
                  <li className="current"><a href="!#"><i className="icofont-dashboard-web"></i><br />Dashboard</a>
                  </li>
                  <li><a href="!#"><i className="icofont-inbox"></i><br />Inbox</a></li>
                  <li><a href="!#"><i className="icofont-ui-calendar"></i><br />Calendar</a></li>
                  <li><a href="!#"><i className="icofont-copy-invert"></i><br />Invoicing</a></li>
                  <li><a href="!#"><i className="icofont-wrench"></i><br />Reporting</a></li>
                </ul>
                <div className="tab_content">
                  <div id="tab1" className="tabs_item">
                    <div className="row h-100 justify-content-center align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mt-0">
                          <h3>Dashboard</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo.</p>
                          <ul>
                            <li><i className="icofont-ui-check"></i> Creative Design</li>
                            <li><i className="icofont-ui-check"></i> Retina Ready</li>
                            <li><i className="icofont-ui-check"></i> Modern Design</li>
                            <li><i className="icofont-ui-check"></i> Digital Marketing &amp;
                                                        Branding</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img"><img
                          src={features}
                          alt="img" /></div>
                      </div>
                    </div>
                  </div>
                  <div id="tab2" className="tabs_item">
                    <div className="row h-100 justify-content-center align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img"><img
                          src={features}
                          alt="img" /></div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mb-0">
                          <h3>Inbox</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo.</p>
                          <ul>
                            <li><i className="icofont-ui-check"></i> Creative Design</li>
                            <li><i className="icofont-ui-check"></i> Retina Ready</li>
                            <li><i className="icofont-ui-check"></i> Modern Design</li>
                            <li><i className="icofont-ui-check"></i> Digital Marketing &amp;
                                                        Branding</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab3" className="tabs_item">
                    <div className="row h-100 justify-content-center align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mt-0">
                          <h3>Calendar</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo.</p>
                          <ul>
                            <li><i className="icofont-ui-check"></i> Creative Design</li>
                            <li><i className="icofont-ui-check"></i> Retina Ready</li>
                            <li><i className="icofont-ui-check"></i> Modern Design</li>
                            <li><i className="icofont-ui-check"></i> Digital Marketing &amp;
                                                        Branding</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img"><img
                          src={features}
                          alt="img" /></div>
                      </div>
                    </div>
                  </div>
                  <div id="tab4" className="tabs_item">
                    <div className="row h-100 justify-content-center align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img"><img
                          src={features}
                          alt="img" /></div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mb-0">
                          <h3>Invoicing</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo.</p>
                          <ul>
                            <li><i className="icofont-ui-check"></i> Creative Design</li>
                            <li><i className="icofont-ui-check"></i> Retina Ready</li>
                            <li><i className="icofont-ui-check"></i> Modern Design</li>
                            <li><i className="icofont-ui-check"></i> Digital Marketing &amp;
                                                        Branding</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab5" className="tabs_item">
                    <div className="row h-100 justify-content-center align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_content mt-0">
                          <h3>Reporting</h3>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo.</p>
                          <ul>
                            <li><i className="icofont-ui-check"></i> Creative Design</li>
                            <li><i className="icofont-ui-check"></i> Retina Ready</li>
                            <li><i className="icofont-ui-check"></i> Modern Design</li>
                            <li><i className="icofont-ui-check"></i> Digital Marketing &amp;
                                                        Branding</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="tabs_item_img"><img
                          src={features}
                          alt="img" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FloatingStyle />
      </section> */}
      <section className="fun-facts-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon"><i className="icofont-users"></i></div>
                <h3><span className="count"><span></span></span></h3>
                <p>Satisfied Client</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon"><i className="icofont-thumbs-up"></i></div>
                <h3><span className="count"><span></span></span></h3>
                <p>Appriciation</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon"><i className="icofont-diamond"></i></div>
                <h3><span className="count"><span></span></span></h3>
                <p>Response time</p>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="single-funfact">
                <div className="icon"><i className="icofont-wrench"></i></div>
                <h3><span className="count"><span></span></span></h3>
                <p>Data Entry</p>
              </div>
            </div>
          </div>
        </div>
        <div className="fun-facts-inner-area">
          <div className="container-fluid">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="fun-facts-image"><img
                  src={featuresImage2}
                  alt="" /></div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="fun-facts-inner-content">
                  <h3>Build Beautiful Interface Into Your Application</h3>
                  <p>Funding freemium technology focus equity bootstrapping usernce niche market. Seed
                  round agile development growth hacking retur investment alpha. Investor advisor
                                    marketing pitch gen scrum project.</p>
                  <p>Responsive web design. Agile development innovator termsheet is users interface pitch
                                    scrum project research &amp; development.</p>
                  <ul>
                    <li>Unimited Video Call</li>
                    <li>Add Favourite contact</li>
                    <li>Camera Filter</li>
                  </ul><a className="btn" href="!#">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="saas-work-process ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Work Process</h2>
            <div className="bar"></div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-work-process">
                <div className="icon"><i className="icofont-calendar"></i></div>
                <h3>Plan</h3>
                <p>Morbi pharetra sapien ut mattis.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-work-process">
                <div className="icon"><i className="icofont-code-alt"></i></div>
                <h3>Develop</h3>
                <p>Morbi pharetra sapien ut mattis.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-work-process">
                <div className="icon"><i className="icofont-server"></i></div>
                <h3>Lounch</h3>
                <p>Morbi pharetra sapien ut mattis.</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-work-process">
                <div className="icon"><i className="icofont-check"></i></div>
                <h3>Reporting</h3>
                <p>Morbi pharetra sapien ut mattis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="partner-area">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
}

export default LandingScreen;