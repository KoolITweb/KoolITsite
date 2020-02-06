import React from 'react';
import LandingPage from './landingpage';
import About from './aboutme';
import Resume from './resume';
import Projects from './projects';
import Contact from './contact';
import Test from './testPage';
import { Switch, Route } from 'react-router-dom';

const Main = ()=> (
	<Switch>
	  <Route exact path="/" component={LandingPage} />
	  <Route exact path="/aboutme" component={About} />
	  <Route exact path="/resume" component={Resume} />
	  <Route exact path="/projects" component={Projects} />
	  <Route exact path="/contact" component={Contact} />
	  <Route exact path="/test" component={Test} />
	</Switch>
)

export default Main;