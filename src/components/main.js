import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutUs from './aboutus';
import ContactUs from './contactus';
import Menu from './menu';


const Main = () => (
<Switch>
<Route exact path="/" component={LandingPage} />
<Route path="/aboutus" component={AboutUs} />
<Route path="/contactus" component={ContactUs} />
<Route path="/menu" component={Menu} />
</Switch>
)

export default Main;
