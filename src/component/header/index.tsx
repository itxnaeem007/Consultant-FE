import React from 'react';

function Header() {
    const [navCollapse, setNavCollapse] = React.useState('hide');
    const onChnageNavCollapse = () => {
        navCollapse === 'show' ? setNavCollapse('hide') : setNavCollapse('show')
    }
    return (
        <div id="__next">
            <header id="header">
                <div id="navbar" className="crake-nav ">
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light"><a className="navbar-brand" href="/">
                            <h3 style={{ color: 'white', fontFamily: 'monospace', fontWeight: 'bolder' }}>Ch-Consultant</h3>
                        </a>
                            <button className="navbar-toggler navbar-toggler-right "
                                type="button" data-toggle="collapse" data-target=''
                                aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation" onClick={() => { onChnageNavCollapse() }}>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className={"collapse navbar-collapse " + navCollapse} id="navbarSupportedContent">
                                <ul className="navbar-nav nav ml-auto">
                                    <li className="nav-item"><a className="nav-link" href="/">Home</a>

                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="/about">Why CCS</a>
                                    </li>
                                    <li><a className="" href="/service">Services</a></li>
                                    {/* <li className="nav-item"><a className="nav-link" href="/team">Team</a>
                                    </li> */}
                                    <li className="nav-item"><a className="nav-link" href="/blog">Blog</a>
                                    </li>
                                    <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            {/* <div>
            <div className="preloader-area">
                <div className="lds-hourglass"></div>
            </div>
        </div> */}
        </div>
    );
}

export default Header;