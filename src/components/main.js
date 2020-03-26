import React from 'react';
import LandingPage from './landingpage';
import About from './aboutme';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';
import Test from './testPage';
import Ppc from './ppc';
import Buttons from './testPages/buttons';
import Dropdown from './testPages/dropdown';
import Login from './testPages/login';
import Sliders from './testPages/sliders';
import Textfields from './testPages/textfields';
import Api from './testPages/api';


import { Switch, Route } from 'react-router-dom';

const Main = ()=> (
	<Switch>
	  <Route exact path="/" component={LandingPage} />
	  <Route exact path="/aboutme" component={About} />
	  <Route exact path="/resume" component={Resume} />
	  <Route exact path="/projects" component={Projects} />
	  <Route exact path="/contact" component={Contact} />
	  <Route exact path="/ppc" component={Ppc} />
	  <Route exact path="/test-page" component={Test} />
	  <Route exact path="/test/api" component={Api} />
	  <Route exact path="/test/dropdown" component={Dropdown} />
	  <Route exact path="/test/textfields" component={Textfields} />
	  <Route exact path="/test/buttons" component={Buttons} />
	  <Route exact path="/test/Login" component={Login} />
	  <Route exact path="/test/sliders" component={Sliders} />
	</Switch>
)

export default Main;