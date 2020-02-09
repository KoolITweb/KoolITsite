import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import { withNamespaces } from 'react-i18next';


class Resume extends Component {
  render() {

	const { t } = this.props;

    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'left' }}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQElnTL_5st7Ig/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=GDRDUZ2O2dqgBwkInRmK2Txe61p6KYV-iKLMFjFMPQU"
                alt="avatar"
                style={{height: '350px', borderRadius: '10px' }}
                 />
            </div>

            <h2 style={{paddingTop: '.5em'}}>Daan Koolman</h2>
            <h4 style={{color: 'grey'}}>QA Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
           	 <p>PROFILE INFO</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
          	  <p>Amsterdam</p>
            <h5>Phone</h5>
        	    <p>123456-7890</p>
            <h5>Email</h5>
       	     <p>daan@koolit.nl</p>
            <h5>Web</h5>
       	     <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2002}
              endYear={2006}
              schoolName="My University"
              schoolDescription="Description"
               />

               <Education
                 startYear={2007}
                 endYear={2009}
                 schoolName="My 2nd Education"
                 schoolDescription="Description"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2009}
              endYear={2012}
              jobName="First Job"
              jobDescription="Description"
              />

              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Second Job"
                jobDescription="Description"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="JavaScript"
                progress={100}
              />
              <Skills
                  skill="Test Automation"
                  progress={80}
              />
              <Skills
                    skill="Exploratory Testing"
                    progress={50}
              />
              <Skills
                      skill="Strategy Development"
                      progress={25}
              />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default withNamespaces()(Resume);