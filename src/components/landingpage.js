import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import { withNamespaces } from 'react-i18next';
import profilePic from '../images/profile/avataaars.png'
import earth from '../images/earth1.png';
import ReactGA from 'react-ga'


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
						<img className="moon" src={earth} alt=""/>
                    	<div class="stars"></div>
                        <div class="twinkling"></div>
                        <div class="clouds"></div>
						<img
							//src="https://image.freepik.com/vrije-vector/programmatool-van-softwaretaal_24877-763.jpg"
							//src="https://media-exp1.licdn.com/dms/image/C4E0BAQFYY0NadTysuw/company-logo_200_200/0?e=1588809600&v=beta&t=Pz2VxHQUqeq6AuoSVzILABelw0HbwCZzaudtwDvcXVg"
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
									<a style={{ fontSize:'20px', color: 'white', fontWeight: 'bold' }}> PPC</a>
								</i>
							</a>

						</div>
						</div>
					</Cell>
				</Grid>

			</div>
		)
	}
}

export default withNamespaces()(Landing);