import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import { withNamespaces } from 'react-i18next';

class Landing extends Component{
	render() {

	    const { t } = this.props;

		return (
			<div style={{width: '100%'}}>
				<Grid className='landing-grid'>
					<Cell col={12}>
						<img
							//src="https://image.freepik.com/vrije-vector/programmatool-van-softwaretaal_24877-763.jpg"
							//src="https://media-exp1.licdn.com/dms/image/C4E0BAQFYY0NadTysuw/company-logo_200_200/0?e=1588809600&v=beta&t=Pz2VxHQUqeq6AuoSVzILABelw0HbwCZzaudtwDvcXVg"
							src="https://media-exp1.licdn.com/dms/image/C4D03AQElnTL_5st7Ig/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=GDRDUZ2O2dqgBwkInRmK2Txe61p6KYV-iKLMFjFMPQU"
							alt="avatar"
							className="koolit-avatar"
						/>
						<div className='koolit-banner'>
							<h1>{t('main_function')}</h1>
							<hr/>
							<p>Test Automation | Quality Process | Software Testing</p>
						<div className="social-links">

							{/* linkedIn */}
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-linkedin-square" aria-hidden="true" />
							</a>

							{/* Github */}
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
								<i className="fa fa-github-square" aria-hidden="true" />
							</a>

							{/* PPC */}
							<a href="http://google.com" rel="noopener noreferrer" target="_blank">
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