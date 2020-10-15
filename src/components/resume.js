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

const resume_companies = [
      {
        "CompanyName": "Zenly",
        "JobTitle": "QA Automation Engineer",
        "ResumeId": "Resume-zenly",
        "Period": "04-2020 - ",
        "CompanyLogo": company_logos['cv-zenly-logo.png']
      },
      {
        "CompanyName": "Transavia",
        "JobTitle": "QA Engineer",
        "ResumeId": "Resume-transavia",
        "Period": "03/2020 - 04/2020",
        "CompanyLogo": company_logos['cv-transavia-logo.png']
      },
      {
        "CompanyName": "Rabobank",
        "JobTitle": "QA Engineer",
        "ResumeId": "Resume-rabo",
        "Period": "02/2018 - 01/2020",
        "CompanyLogo": company_logos['cv-rabo-logo.jpg']
      },
      {
        "CompanyName": "Ahold Delhaize",
        "JobTitle": "QA Engineer",
        "ResumeId": "Resume-ah",
        "Period": "04/2017 - 02/2018",
        "CompanyLogo": company_logos['cv-ah-logo.jpg']
      },
      {
        "CompanyName": "FedEx",
        "JobTitle": "QA Engineer/Scrum Master",
        "ResumeId": "Resume-fedex",
        "Period": "07/2016 - 04/2017",
        "CompanyLogo": company_logos['cv-fedex-logo.jpg']
      },
      {
        "CompanyName": "TNT",
        "JobTitle": "QA Engineer",
        "ResumeId": "Resume-tnt",
        "Period": "06/2015 - 06/2016",
        "CompanyLogo": company_logos['cv-tnt-logo.png']
      },
      {
        "CompanyName": "KoolIT",
        "JobTitle": "QA Engineer",
        "ResumeId": "Resume-koolit",
        "Period": "06/2015 - ",
        "CompanyLogo": company_logos['cv-koolit-logo.jpeg']
      },
      {
        "CompanyName": "Randstad",
        "JobTitle": "QA Engineer",
        "ResumeId": "Resume-randstad",
        "Period": "10/2013 - 05/2015",
        "CompanyLogo": company_logos['cv-randstad-logo.png']
      },
      {
        "CompanyName": "Ministerie van Veiligheid en Justitie",
        "JobTitle": "Test Coöridinator",
        "ResumeId": "Resume-dji",
        "Period": "04/2012 - 10/2013",
        "CompanyLogo": company_logos['cv-minjus-logo.jpg']
      },
      {
        "CompanyName": "Cerios",
        "JobTitle": "Test Consultant",
        "ResumeId": "Resume-cerios",
        "Period": "11/2011 - 05/2015",
        "CompanyLogo": company_logos['cv-cerios-logo.png']
      },
      {
        "CompanyName": "ING",
        "JobTitle": "Software Tester",
        "ResumeId": "Resume-ing",
        "Period": "08/2010 - 01/2012",
        "CompanyLogo": company_logos['cv-ing-logo.png']
      },
      {
        "CompanyName": "ADP",
        "JobTitle": "Software Tester",
        "ResumeId": "Resume-adp",
        "Period": "05/2010 - 07/2010",
        "CompanyLogo": company_logos['cv-adp-logo.jpg']
      },
      {
        "CompanyName": "Qquest",
        "JobTitle": "Test Consultant",
        "ResumeId": "Resume-qquest",
        "Period": "04/2010 - 11/2011",
        "CompanyLogo": company_logos['cv-qquest-logo.jpg']
      }
    ]

const additional_activities = [
      {
        "ActivityName": "resume_add_act_title1",
        "ActivityDescription": "resume_add_act_desc1",
        "Year": "2019"
      },
      {
        "ActivityName": "resume_add_act_title2",
        "ActivityDescription": "resume_add_act_desc2",
        "Year": "2018"
      },
      {
        "ActivityName": "resume_add_act_title3",
        "ActivityDescription": "resume_add_act_desc3",
        "Year": "2017"
      },
      {
        "ActivityName": "resume_add_act_title4",
        "ActivityDescription": "resume_add_act_desc4",
        "Year": "2016"
      }
    ]


const education_courses = [
      {
        "SchoolName": "Impact Mapping",
        "SchoolDescription": "Gojko Adzic",
        "StartYear": "2019"
      },
      {
        "SchoolName": "Programming for everbody (Python)",
        "SchoolDescription": "Coursera",
        "StartYear": "2015"
      },
      {
        "SchoolName": "Commercial Skills",
        "SchoolDescription": "Coen van Veenendaal coaching",
        "StartYear": "2015"
      },
      {
        "SchoolName": "Datamanagement tooling",
        "SchoolDescription": "ICTG",
        "StartYear": "2013"
      },
      {
        "SchoolName": "Prince2 Foundation",
        "SchoolDescription": "Exin",
        "StartYear": "2012"
      },
      {
        "SchoolName": "ITIL v3 Foundation",
        "SchoolDescription": "Exin",
        "StartYear": "2012"
      },
      {
        "SchoolName": "Agile Foundation",
        "SchoolDescription": "Agile Consortium",
        "StartYear": "2013"
      },
      {
        "SchoolName": "Scrum Foundation",
        "SchoolDescription": "Xebia",
        "StartYear": "2013"
      },
      {
        "SchoolName": "Consultancy Skills",
        "SchoolDescription": "Lumage",
        "StartYear": "2011"
      },
      {
        "SchoolName": "TMap Next Foundation",
        "SchoolDescription": "Exin",
        "StartYear": "2010"
      },
      {
        "SchoolName": "Master Organizational & Management Control",
        "SchoolDescription": "Rijksuniversiteit Groningen",
        "StartYear": "2007",
        "EndYear": " - 2009"
      },
      {
        "SchoolName": "Bachelor Business Administration",
        "SchoolDescription": "Rijksuniversiteit Groningen",
        "StartYear": "2003",
        "EndYear": " - 2007"
      }
    ]


const skills = [
        {"skill": "resume_skill1",
         "progress": 80
        },
        {"skill": "resume_skill2",
         "progress": 90
        },
        {"skill": "resume_skill3",
         "progress": 90
        },
        {"skill": "resume_skill4",
         "progress": 80
        },
        {"skill": "resume_skill5",
         "progress": 50
        },
        {"skill": "resume_skill6",
         "progress": 80
        },
        {"skill": "resume_skill7",
         "progress": 80
        },
        {"skill": "resume_skill8",
         "progress": 90
        },
        {"skill": "resume_skill9",
         "progress": 90
        }
    ]



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

  	const Resume_Item = resume_companies.map(function(resume_project){

  	    const openProjectsFromResume = (project) => {
          ReactGA.event({
              category: 'KoolIT site click',
              action: 'Open project from resume',
              label: project
          })
        }

        const current_period = (project) => {
              return (project.CompanyName === 'KoolIT' || project.CompanyName ==='Zenly')
                ? project.Period + t('resume_till_now')
                : project.Period
        }

        return   <VerticalTimelineElement
                     className="vertical-timeline-element--work"
                     id={resume_project.ResumeId}
                     contentStyle={{ background: 'white', color: 'black' }}
                     contentArrowStyle={{ borderRight: '7px solid  white' }}
                     date={current_period(resume_project)}
                     iconStyle={{ background: 'rgb(255, 255, 255)', color: 'black' }}
                     icon={<img src={resume_project.CompanyLogo} style={{width:"100%", height:"100%", borderRadius: "25px"}} />}
                 >
                     <h3 className="vertical-timeline-element-title">{resume_project.JobTitle}</h3>
                     <h4 className="vertical-timeline-element-subtitle">{resume_project.CompanyName}</h4>
                          <a href="/projects" onClick={(event) => openProjectsFromResume(resume_project.CompanyName)}>
                              <Button id="resume_project_button" colored style={{marginLeft: "3%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('resume_projects_button')}</Button>
                          </a>
                 </VerticalTimelineElement>
    })

  	const Additional_Activities = additional_activities.map(function(additional_activity){

        return <Education
                    startYear={additional_activity.Year}
                    schoolName={t(additional_activity.ActivityName)}
                    schoolDescription={t(additional_activity.ActivityDescription)}
               />
    })

  	const Education_Item = education_courses.map(function(education_course){

  	    const with_or_without_endyear = (years) => {
              return (years.EndYear)
                ? years.EndYear
                : ""
  	    }

        return <Education
                    startYear={education_course.StartYear}
                    endYear={with_or_without_endyear(education_course)}
                    schoolName={education_course.SchoolName}
                    schoolDescription={education_course.SchoolDescription}
               />
    })

  	const Skills_Item = skills.map(function(skill){

        return <Skills
                skill={t(skill.skill)}
                progress={skill.progress}
               />
    })


    return(
      <div className="resumePage">

        <Grid>
          <Cell className="resume_column_left" col={4}>
            <div id="resume_profile" style={{ backgroundColor: 'rgb(255,255,255)', borderRadius: '10px', padding: '5%', marginBottom: '10%'}}>
                <div style={{textAlign: 'left' }}>
                  <img
                    src={profilePic}
                    alt="avatar"
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

            <div id="resume_skills" style={{ backgroundColor: 'rgb(255,255,255)', borderRadius: '10px', padding: '5%', marginBottom: '10%' }}>
                <img
                 src={company_logos['cv-skills.png']}
                 alt="skills"
                 style={{height: '75%', width: '100%', borderRadius: '10px' }}
                />
                <h2 style={{fontWeight: "bold"}}>{t('resume_skill_header')}</h2>

                {Skills_Item}

            </div>

            <div id="resume_education" style={{ backgroundColor: 'rgb(255,255,255)', borderRadius: '10px', padding: '5%' }}>
                <img
                  src={company_logos['cv-education.png']}
                  alt="Education"
                  style={{height: '75%', width: '100%', borderRadius: '10px' }}
                   />
               <h2 style={{fontWeight: "bold"}}>{t('resume_education_header')}</h2>

               {Education_Item}

            </div>

          </Cell>

          <Cell id="resume_experience" className="resume-right-col" col={8}>
              <h2 style={{fontWeight: "bold"}}>{t('resume_experience_header')}</h2>
              <VerticalTimeline>

                  {Resume_Item}

              </VerticalTimeline>

              <hr style={{borderTop: '4px solid white'}} />
              <h2 style={{fontWeight: "bold"}}>{t('resume_activities_header')}</h2>
              <div className="education">

                  {Additional_Activities}

              </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default withNamespaces()(Resume);