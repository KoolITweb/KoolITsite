import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import { withNamespaces } from 'react-i18next';
import profilePic from '../images/profile/avataaars.png'
import earth from '../images/earth1.png';
import rocket from '../images/rocket.png';
import fire from '../images/fire.png';
import astronaut from '../images/astronaut.png';
import ufo from '../images/ufo.png';
import ReactGA from 'react-ga';
//import Astronaut from './astronaut';

class Landing extends Component{

openURLLink (urlName) {
  ReactGA.event({
      category: 'KoolIT site click',
      action: 'Open url from homepage',
      label: urlName
  })
}

	render() {

	    const { t } = this.props;

		return (
		<div class="background-containers" style={{width: '100%'}}>

				<Grid className='landing-grid'>

					<Cell col={12}>
						<img className="moon" id="moon" src={earth} alt=""/>
						<img
							src={profilePic}
							alt="avatar"
							className="koolit-avatar"
						/>
						<div className='koolit-banner'>
							<h1>{t('main_function')}</h1>
							<hr/>
							<p>{t('main_qualities')}</p>
						<div className="social-links">

							{/* linkedIn */}
							<a href="https://www.linkedin.com/in/daan-koolman/" rel="noopener noreferrer" target="_blank" onClick={(event) => this.openURLLink('LinkedIn')}>
								<i className="fa fa-linkedin-square" aria-hidden="true" />
							</a>

							{/* Github */}
							<a href="https://github.com/KoolITweb/KoolITsite" rel="noopener noreferrer" target="_blank" onClick={(event) => this.openURLLink('Github')}>
								<i className="fa fa-github-square" aria-hidden="true" />
							</a>

							{/* PPC */}
							<a href="https://productpracticescanvas.org/" rel="noopener noreferrer" target="_blank" onClick={(event) => this.openURLLink('PPC')}>
								<i className="fa fa-globe" aria-hidden="true">
									<a className="ppc-icon-text" style={{ fontSize:'20px', color: 'white', fontWeight: 'bold' }}> PPC</a>
								</i>
							</a>

						</div>
						</div>

						<div id="outerspace">
                          <div class="firerocket" id="rocket-id">
                            <img class="fire" src={fire} alt="fire"/>
                            <img class="rocket" src={rocket} alt="rocket"/>
                          </div>
                          <div class="astronaut">
                            <img className="astronaut" src={astronaut} alt="astronaut"/>
                          </div>
                          <div class="ufo">
                            <img className="ufo" src={ufo} alt="ufo"/>
                          </div>
                        </div>

					</Cell>

				</Grid>

			</div>
		)
	}

}

export default withNamespaces()(Landing);