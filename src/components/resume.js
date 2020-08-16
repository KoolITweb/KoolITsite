import React, { Component } from 'react';
import { Button, Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';
import { withNamespaces } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import profilePic from '../images/profile/Daan.jpg';
import ReactGA from 'react-ga'
import importAll from '../importAll';


const company_logos = importAll(require.context('../images/organizations', false, /\.(png|jpe?g)$/));


class Resume extends Component {

  openProjectsFromResume (project) {
    ReactGA.event({
        category: 'KoolIT site click',
        action: 'Open project from resume',
        label: project
    })
  }

  render() {

	const { t } = this.props;

    return(
      <div className="resumePage">

        <Grid>
          <Cell className="resume_column_left" col={4}>
          <div style={{ backgroundColor: 'rgb(255,255,255)', borderRadius: '10px', padding: '5%', marginBottom: '10%'}}>
            <div style={{textAlign: 'left' }}>
              <img
                src={profilePic}
                alt="avatar"
                style={{marginBottom: '10px', width: '100%', borderRadius: '10px' }}
                 />
            </div>

            <h4 class="resumeHeaderAdjust" style={{fontWeight: "bold", fontSize: "250%"}}>Daan Koolman</h4>
            <h4 class="resumeHeaderAdjust" style={{color: 'grey', fontWeight: "bold", fontSize: "200%"}}>- QA Engineer -</h4>
            <hr style={{marginTop: '30px', borderTop: '3px solid orangered', width: '100%'}}/>
           	 <h2 class="resumeHeaderAdjust" style={{fontWeight: "bold"}}>{t('resume_Profile_header')}</h2>
            <hr style={{borderTop: '3px solid orangered', width: '100%'}}/>
            <h5 style={{fontWeight: "bold"}}>{t('resume_address_header')}</h5>
          	  <p>Amsterdam</p>
            <h5 style={{fontWeight: "bold"}}>{t('resume_phone_header')}</h5>
        	    <p>+31-649966968</p>
            <h5 style={{fontWeight: "bold"}}>{t('resume_mail_header')}</h5>
       	     <p>daan@koolit.nl</p>
            <h5 style={{fontWeight: "bold"}}>{t('resume_web_header')}</h5>
       	     <p>www.koolit.nl</p>
            </div>
     <div style={{ backgroundColor: 'rgb(255,255,255)', borderRadius: '10px', padding: '5%', marginBottom: '10%' }}>
              <img
                src={company_logos['cv-skills.png']}
                alt="skills"
                style={{height: '75%', width: '100%', borderRadius: '10px' }}
                 />
            <h2 style={{fontWeight: "bold"}}>{t('resume_skill_header')}</h2>
                          <Skills
                            skill={t('resume_skill1')}
                            progress={80}
                          />
                          <Skills
                              skill={t('resume_skill2')}
                              progress={90}
                          />
                          <Skills
                              skill={t('resume_skill3')}
                              progress={90}
                          />
                          <Skills
                              skill={t('resume_skill4')}
                              progress={80}
                          />
                          <Skills
                            skill={t('resume_skill5')}
                            progress={50}
                          />
                          <Skills
                              skill={t('resume_skill6')}
                              progress={80}
                          />
                          <Skills
                              skill={t('resume_skill7')}
                              progress={80}
                          />
                          <Skills
                              skill={t('resume_skill8')}
                              progress={90}
                          />
                          <Skills
                              skill={t('resume_skill9')}
                              progress={90}
                          />
</div>
<div style={{ backgroundColor: 'rgb(255,255,255)', borderRadius: '10px', padding: '5%' }}>
              <img
                src={company_logos['cv-education.png']}
                alt="Education"
                style={{height: '75%', width: '100%', borderRadius: '10px' }}
                 />
        <h2 style={{fontWeight: "bold"}}>{t('resume_education_header')}</h2>
                    <Education
                      startYear={2019}
                      schoolName="Impact Mapping"
                      schoolDescription="Goijko Adzic"
                    />
            <Education
              startYear={2015}
              
              schoolName="Programming for everbody (Python)"
              schoolDescription="Coursera"
            />

            <Education
              startYear={2015}
              
              schoolName="Commercial Skills"
              schoolDescription="Coen van Veenendaal coaching"
            />

            <Education
              startYear={2013}
              
              schoolName="Datamanagement tooling"
              schoolDescription="ICTG"
            />

            <Education
              startYear={2012}
              
              schoolName="Prince2 Foundation"
              schoolDescription="Exin"
            />

            <Education
              startYear={2012}
              
              schoolName="ITIL v3 Foundation"
              schoolDescription="Exin"
            />

            <Education
              startYear={2012}
              
              schoolName="Agile Foundation"
              schoolDescription="Agile Consortium"
            />

            <Education
              startYear={2012}
              
              schoolName="Scrum Foundation"
              schoolDescription="Xebia"
            />

            <Education
              startYear={2011}
              
              schoolName="Consultancy Skills"
              schoolDescription="Lumage"
            />

            <Education
              startYear={2010}
              
              schoolName="TMap Next Foundation"
              schoolDescription="Exin"
            />

            <Education
              startYear={2007}
              endYear={-2009}
              schoolName="Master Organizational & Management Control"
              schoolDescription="Rijksuniversiteit Groningen"
            />

            <Education
              startYear={2003}
              endYear={-2007}
              schoolName="Bachelor Business Administration"
              schoolDescription="Rijksuniversiteit Groningen"
            />
</div>



</Cell>
          <Cell className="resume-right-col" col={8}>
            <h2 style={{fontWeight: "bold"}}>{t('resume_experience_header')}</h2>

<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date={t('resume_till_now')}
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src={company_logos['cv-zenly-logo.png']} style={{width:"100%", height:"100%", borderRadius: "20px"}} />}
  >
    <h3 className="vertical-timeline-element-title">QA Automation Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Zenly</h4>
     <a href="/projects" onClick={(event) => this.openProjectsFromResume('Zenly')}><Button colored style={{marginLeft: "3%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('resume_projects_button')}</Button></a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="03/2020 - 04/2020"
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src={company_logos['cv-transavia-logo.png']} style={{width:"100%", height:"100%", borderRadius: "20px"}} />}
  >
    <h3 className="vertical-timeline-element-title">QA Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Transavia</h4>
     <a href="/projects" onClick={(event) => this.openProjectsFromResume('Transavia')}><Button colored style={{marginLeft: "3%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('resume_projects_button')}</Button></a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="02/2018 - 01/2020"
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src={company_logos['cv-rabo-logo.jpg']} style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">QA Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Rabobank</h4>
     <a href="/projects" onClick={(event) => this.openProjectsFromResume('Rabobank')}><Button colored style={{marginLeft: "3%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('resume_projects_button')}</Button></a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="04/2017 - 02/2018"
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src={company_logos['cv-ah-logo.jpg']} style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">QA Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Ahold Delhaize</h4>
     <a href="/projects" onClick={(event) => this.openProjectsFromResume('AH')}><Button colored style={{marginLeft: "3%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('resume_projects_button')}</Button></a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="07/2016 - 04/2017"
    iconStyle={{ background: 'rgb(255, 255, 255)', color: 'black' }}
    icon={<img src={company_logos['cv-fedex-logo.jpg']} style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">QA Engineer / Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">FedEx</h4>
     <a href="/projects" onClick={(event) => this.openProjectsFromResume('FedEx')}><Button colored style={{marginLeft: "3%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('resume_projects_button')}</Button></a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="06/2015 - 06/2016"
    iconStyle={{ background: 'rgb(255, 255, 255)', color: 'black' }}
    icon={<img src={company_logos['cv-tnt-logo.png']} style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">QA Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">TNT</h4>
     <a href="/projects" onClick={(event) => this.openProjectsFromResume('TNT')}><Button colored style={{marginLeft: "3%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('resume_projects_button')}</Button></a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date={t('resume_till_now')}
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src={company_logos['cv-koolit-logo.jpeg']} style={{width:"100%", height:"100%", borderRadius: "15px"}} />}
  >
    <h3 className="vertical-timeline-element-title">QA Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">KoolIT</h4>
	<p>Freelance start</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="10/2013 - 05/2015"
    iconStyle={{ background: 'rgb(255, 255, 255)', color: 'black' }}
    icon={<img src={company_logos['cv-randstad-logo.png']} style={{width:"100%", height:"105%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">QA Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Randstad</h4>
     <a href="/projects" onClick={(event) => this.openProjectsFromResume('Randstad')}><Button colored style={{marginLeft: "3%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('resume_projects_button')}</Button></a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="04/2012 - 10/2013"
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src={company_logos['cv-minjus-logo.jpg']} style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">Test coordinator</h3>
    <h4 className="vertical-timeline-element-subtitle">Ministerie van Veiligheid en Justitie</h4>
     <a href="/projects" onClick={(event) => this.openProjectsFromResume('DJI')}><Button colored style={{marginLeft: "3%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('resume_projects_button')}</Button></a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="11/2011 - 05/2015"
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src={company_logos['cv-cerios-logo.png']} style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">Testconsultant</h3>
    <h4 className="vertical-timeline-element-subtitle">Cerios</h4>
	<p></p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="08/2010 - 01/2012"
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src={company_logos['cv-ing-logo.png']} style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">Software Tester</h3>
    <h4 className="vertical-timeline-element-subtitle">ING</h4>
	<p></p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="05/2010 - 07/2010"
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src={company_logos['cv-adp-logo.jpg']} style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">Software Tester</h3>
    <h4 className="vertical-timeline-element-subtitle">ADP</h4>
	<p></p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="04/2010 - 11/2011"
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src={company_logos['cv-qquest-logo.jpg']} style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">Test Consultant</h3>
    <h4 className="vertical-timeline-element-subtitle">Qquest</h4>
	<p></p>
  </VerticalTimelineElement>

</VerticalTimeline>

        <hr style={{borderTop: '4px solid white'}} />

              <h2 style={{fontWeight: "bold"}}>{t('resume_activities_header')}</h2>
            <div className="education">
            <Education
              startYear={2019}
              schoolName={t('resume_add_act_title1')}
              schoolDescription={t('resume_add_act_desc1')}
            />

            <Education className="education"
              startYear={2018}
              
              schoolName={t('resume_add_act_title2')}
              schoolDescription={t('resume_add_act_desc2')}
            />

            <Education className="education"
              startYear={2017}
              
              schoolName={t('resume_add_act_title3')}
              schoolDescription={t('resume_add_act_desc3')}
            />

            <Education className="education"
              startYear={2016}
              
              schoolName={t('resume_add_act_title4')}
              schoolDescription={t('resume_add_act_desc4')}
            />
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default withNamespaces()(Resume);