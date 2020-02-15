import React from 'react';
import LandingPage from './landingpage';
import About from './aboutme';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';
import Test from './testPage';
import Ppc from './ppc';

import { Switch, Route } from 'react-router-dom';

const Main = ()=> (
	<Switch>
	  <Route exact path="/" component={LandingPage} />
	  <Route exact path="/aboutme" component={About} />
	  <Route exact path="/resume" component={Resume} />
	  <Route exact path="/projects" component={Projects} />
	  <Route exact path="/contact" component={Contact} />
	  <Route exact path="/test-page" component={Test} />
	  <Route exact path="/ppc" component={Ppc} />
	</Switch>
)

export default Main;