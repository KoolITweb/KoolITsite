import React, { Component } from 'react';
import { Button, Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import { withNamespaces } from 'react-i18next';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import profilePic from '../images/profile/Daan.jpg';
import { Link } from 'react-router-dom';


class Resume extends Component {
  render() {

	const { t } = this.props;

    return(
      <div>
        <Grid>
          <Cell className="resume_column_left" col={4}>
          <div style={{ backgroundColor: 'rgb(255,255,255)', borderRadius: '10px', padding: '5%', marginBottom: '10%'}}>
            <div style={{textAlign: 'left' }}>
              <img
                src={profilePic}
                alt="avatar"
                style={{width: '100%', borderRadius: '10px' }}
                 />
            </div>

            <h2 style={{paddingTop: '.5em', fontWeight: "bold"}}>Daan Koolman</h2>
            <h4 style={{color: 'grey', fontWeight: "bold", fontSize: "250%"}}>- QA Engineer -</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
           	 <p style={{fontWeight: "bold"}}>PROFILE INFO</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <h5 style={{fontWeight: "bold"}}>Address</h5>
          	  <p>Amsterdam</p>
            <h5 style={{fontWeight: "bold"}}>Phone</h5>
        	    <p>123456-7890</p>
            <h5 style={{fontWeight: "bold"}}>Email</h5>
       	     <p>daan@koolit.nl</p>
            <h5 style={{fontWeight: "bold"}}>Web</h5>
       	     <p>www.koolit.nl</p>
            </div>
     <div style={{ backgroundColor: 'rgb(255,255,255)', borderRadius: '10px', padding: '5%', marginBottom: '10%' }}>
              <img
                src="https://www.myamcat.com/blog/wp-content/uploads/2019/02/Text-placeholder-3.png"
                alt="skills"
                style={{height: '75%', width: '100%', borderRadius: '10px' }}
                 />
            <h2 style={{fontWeight: "bold"}}>Skills</h2>
                          <Skills
                            skill="Agile Development"
                            progress={80}
                          />
                          <Skills
                              skill="Test Automation"
                              progress={90}
                          />
                          <Skills
                              skill="Exploratory Testing"
                              progress={90}
                          />
                          <Skills
                              skill="Strategy Development"
                              progress={80}
                          />
                          <Skills
                            skill="JavaScript"
                            progress={50}
                          />
                          <Skills
                              skill="Teamwork"
                              progress={80}
                          />
                          <Skills
                              skill="Communication"
                              progress={80}
                          />
                          <Skills
                              skill="Critical Thinking"
                              progress={90}
                          />
                          <Skills
                              skill="Data Analysis"
                              progress={90}
                          />
</div>
<div style={{ backgroundColor: 'rgb(255,255,255)', borderRadius: '10px', padding: '5%' }}>
              <img
                src="https://www.arcgis.com/sharing/rest/content/items/6c036c09c490450db100cbf867c7688a/resources/1571940616424.png?w=3340"
                alt="Education"
                style={{height: '75%', width: '100%', borderRadius: '10px' }}
                 />
        <h2 style={{fontWeight: "bold"}}>Education & Courses</h2>
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
            <h2 style={{fontWeight: "bold"}}>Experience</h2>

<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="03/2020 - present"
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src="https://www.bagagekosten.nl/wp-content/uploads/2019/03/transavia-featured.png" style={{width:"100%", height:"100%", borderRadius: "20px"}} />}
  >
    <h3 className="vertical-timeline-element-title">QA Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Transavia</h4>
     <a href="/projects"><Button colored style={{marginLeft: "3%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>Go to projects page</Button></a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="02/2018 - 01-2020"
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src="https://voorelkaarzwolle.nl/wp-content/uploads/2016/10/Rabobank-logo.jpg" style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">QA Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Rabobank</h4>
     <a href="/projects"><Button colored style={{marginLeft: "3%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>Go to projects page</Button></a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="04/2017 - 02-2018"
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src="https://d3heu4nageqwg5.cloudfront.net/app/uploads/2019/05/attachment-ahold-delhaize-logo-768x543.jpg" style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">QA Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Ahold Delhaize</h4>
     <a href="/projects"><Button colored style={{marginLeft: "3%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>Go to projects page</Button></a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="07/2016 - 04/2017"
    iconStyle={{ background: 'rgb(255, 255, 255)', color: 'black' }}
    icon={<img src="https://www.nettl.com/nl/wp-content/uploads/2019/06/fedex-logo.jpg" style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">QA Engineer / Scrum Masteer</h3>
    <h4 className="vertical-timeline-element-subtitle">FedEx</h4>
     <a href="/projects"><Button colored style={{marginLeft: "3%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>Go to projects page</Button></a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="06/2015 - 06-2016"
    iconStyle={{ background: 'rgb(255, 255, 255)', color: 'black' }}
    icon={<img src="https://toppng.com/uploads/preview/tnt-express-logo-vector-11573945216v99jrefohz.png" style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">QA Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">TNT</h4>
     <a href="/projects"><Button colored style={{marginLeft: "3%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>Go to projects page</Button></a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="06/2015 - present"
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src="https://media-exp1.licdn.com/dms/image/C4D0BAQH4NGVYVG0akQ/company-logo_100_100/0?e=1590624000&v=beta&t=A-E6dSyNstqxfCJBM1VKhdvF4CHNnzZREkMaxyfKsdY" style={{width:"100%", height:"100%", borderRadius: "15px"}} />}
  >
    <h3 className="vertical-timeline-element-title">QA Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">KoolIT</h4>
	<p>Started of freelance career</p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="10/2013 - 05/2015"
    iconStyle={{ background: 'rgb(255, 255, 255)', color: 'black' }}
    icon={<img src="https://nathansgibson.org/wp-content/uploads/2015/05/Randstad-logo.jpg" style={{width:"100%", height:"105%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">QA Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Randstad</h4>
     <a href="/projects"><Button colored style={{marginLeft: "3%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>Go to projects page</Button></a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="04/2012 - 10/2013"
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src="https://maverickgedrag.nl/wp-content/uploads/2019/04/Ministerie-van-Justitie-en-Veiligheid-Maverick-gedragsverandering-nudging-700x450.jpg" style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">Test coordinator</h3>
    <h4 className="vertical-timeline-element-subtitle">Ministerie van Veiligheid en Justitie</h4>
     <a href="/projects"><Button colored style={{marginLeft: "3%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>Go to projects page</Button></a>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="11/2011 - 05/2015"
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src="https://media-exp1.licdn.com/dms/image/C4D0BAQEH535lQVW0ag/company-logo_100_100/0?e=1590624000&v=beta&t=jNL9Ol0gBMWpMjGoqG-Nz2XMjO4-A8DBi5VKtd_FHe8" style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">Testconsultant</h3>
    <h4 className="vertical-timeline-element-subtitle">Cerios</h4>
	<p></p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="08/2010 - 01-2012"
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src="https://www.ebusco.nl/wp-content/uploads/ING-Bank-provides-growth-capital-to-Ebusco.jpeg" style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">Software Tester</h3>
    <h4 className="vertical-timeline-element-subtitle">ING</h4>
	<p></p>
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="05/2010 - 07-2010"
    iconStyle={{ background: 'white', color: 'black' }}
    icon={<img src="https://resultfactory.blob.core.windows.net/marqit-it-public/suppliers/logo-adp.jpg" style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
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
    icon={<img src="https://pbs.twimg.com/profile_images/1174260337891315716/DMLZuC8E_400x400.jpg" style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
  >
    <h3 className="vertical-timeline-element-title">Test Consultant</h3>
    <h4 className="vertical-timeline-element-subtitle">Qquest</h4>
	<p></p>
  </VerticalTimelineElement>

</VerticalTimeline>

        <hr style={{borderTop: '4px solid white'}} />

              <h2 style={{fontWeight: "bold"}}>Additional Activities</h2>
            <div className="education">
            <Education
              startYear={2019}
              schoolName="Product Practices Canvas"
              schoolDescription={t('resume_add_act_desc1')}
            />

            <Education className="education"
              startYear={2018}
              
              schoolName="Talk about Customer data at Flissi IT (Rabobank)"
              schoolDescription={t('resume_add_act_desc2')}
            />

            <Education className="education"
              startYear={2017}
              
              schoolName="Co-organizer Testlab Eurostar Software Test Conference"
              schoolDescription={t('resume_add_act_desc3')}
            />

            <Education className="education"
              startYear={2016}
              
              schoolName="Talk about Knowing Your Customer at Testnet"
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