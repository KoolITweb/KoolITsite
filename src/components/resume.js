import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import { withNamespaces } from 'react-i18next';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';


class Resume extends Component {
  render() {

	const { t } = this.props;

    return(
      <div>
        <Grid>
          <Cell col={4}>
          <div style={{ backgroundColor: '#e86971', borderRadius: '10px', padding: '5%', marginBottom: '10%' }}>
            <div style={{textAlign: 'left' }}>
              <img
                src="https://media-exp1.licdn.com/dms/image/C4D03AQElnTL_5st7Ig/profile-displayphoto-shrink_200_200/0?e=1586390400&v=beta&t=GDRDUZ2O2dqgBwkInRmK2Txe61p6KYV-iKLMFjFMPQU"
                alt="avatar"
                style={{width: '100%', borderRadius: '10px' }}
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
            </div>
     <div style={{ backgroundColor: '#e86971', borderRadius: '10px', padding: '5%' }}>
              <img
                src="https://www.myamcat.com/blog/wp-content/uploads/2019/02/Text-placeholder-3.png"
                alt="skills"
                style={{height: '75%', width: '100%', borderRadius: '10px' }}
                 />
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

</div>
</Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

<Timeline lineColor={'#ddd'}>
  <TimelineItem
    key="001"
    dateText="11/2010 – Present"
    style={{ color: '#e86971' }}
  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
  <TimelineItem
    key="002"
    dateText="04/2009 – 11/2010"
    dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
    bodyContainerStyle={{
      background: '#ddd',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}
  >
    <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
    <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
  <TimelineItem
    key="003"
    dateComponent={(
      <div
        style={{
          display: 'block',
          float: 'left',
          padding: '10px',
          background: 'rgb(150, 150, 150)',
          color: '#fff',
        }}
      >
        11/2008 – 04/2009
      </div>
    )}
  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
  <TimelineItem
    key="004"
    dateText="08/2008 – 11/2008"
    dateInnerStyle={{ background: '#76bb7f' }}
  >
    <h3>Title, Company</h3>
    <h4>Subtitle</h4>
    <p>
      Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
      exercitation. Veniam velit adipisicing anim excepteur nostrud magna
      nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
      reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
      est.
    </p>
  </TimelineItem>
</Timeline>


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
              <h2>Additional Activities</h2>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default withNamespaces()(Resume);