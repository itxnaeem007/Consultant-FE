import React from 'react';
import Footer from '../component/footer';
import Header from '../component/header';
import ServicesScreen from '../pages/service/services';
import LandingScreen from './../pages/landing/landing';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutScreen from '../pages/aboutUs';
// import TeamScreen from '../pages/team/team';
import ProtfolioScreen from '../pages/portfolio';
import BlogScreen from '../pages/blog';
import FAQScreen from '../pages/faq';
import ContactScreen from '../pages/contact';
import BlogDetail from '../pages/blog/blog-detail';
import LoginScreen from '../pages/login/index';
import BlogWriteScreen from '../pages/blog/blog-write';

function Routing() {
  return (
    <div >
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path={'/'}
            component={LandingScreen}
            exact
          />
          <Route
            path={'/service'}
            component={ServicesScreen}
            exact
          />
          <Route
            path={'/about'}
            component={AboutScreen}
            exact
          />
          {/* <Route
            path={'/team'}
            component={TeamScreen}
            exact
          /> */}
          <Route
            path={'/portfolio'}
            component={ProtfolioScreen}
            exact
          />
          <Route
            path={'/blog'}
            component={BlogScreen}
            exact
          />
          <Route
            path={'/faq'}
            component={FAQScreen}
            exact
          />
          <Route
            path={'/contact'}
            component={ContactScreen}
            exact
          />
          <Route
            path={'/blog/detail/:type'}
            component={BlogDetail}
            exact
          />
          <Route
            path={'/blog/login'}
            component={LoginScreen}
            exact
          />
          <Route
            path={'/write/post'}
            component={BlogWriteScreen}
            exact
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default Routing;