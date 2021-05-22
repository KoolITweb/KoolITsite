import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { Button } from 'react-mdl';
import ReactGA from 'react-ga';
import importAll from '../../importAll';


const project_pictures = importAll(require.context('../../images/organizations/projects', false, /\.(png|jpe?g)$/));
const tools = importAll(require.context('../../images/tools', false, /\.(png|jpe?g)$/));


const completeProject = [
      {
        "ProjectName": "DPG",
        "ProjectCard": "card-DPG",
        "ProjectGalId": "gallery-DPG",
        "ProjectDesc": "project_dpg_desc",
        "ProjectResults": "project_dpg_results",
        "ProjectsCardImage": project_pictures['projects_dpg.png'],
        "ProjectGalMainImage": project_pictures['proj-dpg-app.jpg'],
        "ProjectGalSubImage1": project_pictures['proj-dpg-ad.png'],
        "ProjectGalSubImage2": project_pictures['proj-dpg-hln.png'],
        "Tools": [
            tools['tool-bitrise.png'],
            tools['tool-firebase.png'],
            tools['tool-jira-conf.png'],
            tools['tool-xcode.webp'],
            tools['tool-androidstudio.png']
        ]
      },
      {
        "ProjectName": "Zenly",
        "ProjectCard": "card-Zenly",
        "ProjectGalId": "gallery-Zenly",
        "ProjectDesc": "project_zenly_desc",
        "ProjectResults": "project_zenly_results",
        "ProjectsCardImage": project_pictures['projects-zenly.jpg'],
        "ProjectGalMainImage": project_pictures['proj-zenly-mainapp.png'],
        "ProjectGalSubImage1": project_pictures['proj-zenly-iosandr.jpg'],
        "ProjectGalSubImage2": project_pictures['proj-zenly-snapzen.png'],
        "Tools": [
            tools['tool-amplitude.png'],
            tools['tool-buildkite.png'],
            tools['tool-pytest.png'],
            tools['tool-appium.jpg'],
            tools['tool-awsdevicefarm.jpg'],
            tools['tool-discord.jpg'],
            tools['tool-docker.jpg'],
            tools['tool-firebase.png'],
            tools['tool-jira.jpg'],
            tools['tool-xray.jpg'],
            tools['tool-notion.png'],
            tools['tool-Pycharm.png'],
            tools['tool-python.png'],
            tools['tool-testrail.jpg'],
            tools['tool-xcode.webp'],
            tools['tool-androidstudio.png']
        ]
      },
      {
        "ProjectName": "Transavia",
        "ProjectCard": "card-Transavia",
        "ProjectGalId": "gallery-Transavia",
        "ProjectDesc": "project_trans_desc",
        "ProjectResults": "project_trans_results",
        "ProjectsCardImage": project_pictures['projects-transavia.png'],
        "ProjectGalMainImage": project_pictures['proj-trans-mainplane.jpg'],
        "ProjectGalSubImage1": project_pictures['proj-trans-covid.png'],
        "ProjectGalSubImage2": project_pictures['proj-trans-support.jpg'],
        "Tools": [
            tools['tool-amplitude.png'],
            tools['tool-buildkite.png'],
            tools['tool-pytest.png'],
            tools['tool-appium.jpg'],
            tools['tool-awsdevicefarm.jpg'],
            tools['tool-discord.jpg'],
            tools['tool-docker.jpg'],
            tools['tool-firebase.png'],
            tools['tool-jira.jpg'],
            tools['tool-xray.jpg'],
            tools['tool-notion.png'],
            tools['tool-Pycharm.png'],
            tools['tool-python.png'],
            tools['tool-testrail.jpg'],
            tools['tool-xcode.webp'],
            tools['tool-androidstudio.png']
        ]
      },
      {
        "ProjectName": "Rabobank",
        "ProjectCard": "card-Rabobank",
        "ProjectGalId": "gallery-Rabobank",
        "ProjectDesc": "project_rabo_desc",
        "ProjectResults": "project_rabo_results",
        "ProjectsCardImage": project_pictures['projects_rabo.jpg'],
        "ProjectGalMainImage": project_pictures['proj-rabo-wonen.png'],
        "ProjectGalSubImage1": project_pictures['proj-rabo-bdd.png'],
        "ProjectGalSubImage2": project_pictures['proj-rabo-im.png'],
        "Tools": [
            tools['tool-amplitude.png'],
            tools['tool-buildkite.png'],
            tools['tool-pytest.png'],
            tools['tool-appium.jpg'],
            tools['tool-awsdevicefarm.jpg'],
            tools['tool-discord.jpg'],
            tools['tool-docker.jpg'],
            tools['tool-firebase.png'],
            tools['tool-jira.jpg'],
            tools['tool-xray.jpg'],
            tools['tool-notion.png'],
            tools['tool-Pycharm.png'],
            tools['tool-python.png'],
            tools['tool-testrail.jpg'],
            tools['tool-xcode.webp'],
            tools['tool-androidstudio.png']
        ]
      },
      {
        "ProjectName": "AH",
        "ProjectCard": "card-AH",
        "ProjectGalId": "gallery-AH",
        "ProjectDesc": "project_ah_desc",
        "ProjectResults": "project_ah_results",
        "ProjectsCardImage": project_pictures['projects-ah.png'],
        "ProjectGalMainImage": project_pictures['proj-ah-mainfloorplan.jpg'],
        "ProjectGalSubImage1": project_pictures['proj-ah-database.jpg'],
        "ProjectGalSubImage2": project_pictures['proj-ah-sql.png'],
        "Tools": [
            tools['tool-amplitude.png'],
            tools['tool-buildkite.png'],
            tools['tool-pytest.png'],
            tools['tool-appium.jpg'],
            tools['tool-awsdevicefarm.jpg'],
            tools['tool-discord.jpg'],
            tools['tool-docker.jpg'],
            tools['tool-firebase.png'],
            tools['tool-jira.jpg'],
            tools['tool-xray.jpg'],
            tools['tool-notion.png'],
            tools['tool-Pycharm.png'],
            tools['tool-python.png'],
            tools['tool-testrail.jpg'],
            tools['tool-xcode.webp'],
            tools['tool-androidstudio.png']
        ]
      },
      {
        "ProjectName": "FedEx",
        "ProjectCard": "card-FedEx",
        "ProjectGalId": "gallery-FedEx",
        "ProjectDesc": "project_fedex_desc",
        "ProjectResults": "project_fedex_results",
        "ProjectsCardImage": project_pictures['projects-fedex-logo.png'],
        "ProjectGalMainImage": project_pictures['proj-fedex-maintotnt.jpg'],
        "ProjectGalSubImage1": project_pictures['proj-fedex-mvp.jpg'],
        "ProjectGalSubImage2": project_pictures['proj-fedex-scrum.png'],
        "Tools": [
            tools['tool-amplitude.png'],
            tools['tool-buildkite.png'],
            tools['tool-pytest.png'],
            tools['tool-appium.jpg'],
            tools['tool-awsdevicefarm.jpg'],
            tools['tool-discord.jpg'],
            tools['tool-docker.jpg'],
            tools['tool-firebase.png'],
            tools['tool-jira.jpg'],
            tools['tool-xray.jpg'],
            tools['tool-notion.png'],
            tools['tool-Pycharm.png'],
            tools['tool-python.png'],
            tools['tool-testrail.jpg'],
            tools['tool-xcode.webp'],
            tools['tool-androidstudio.png']
        ]
      },
      {
        "ProjectName": "TNT",
        "ProjectCard": "card-TNT",
        "ProjectGalId": "gallery-TNT",
        "ProjectDesc": "project_tnt_desc",
        "ProjectResults": "project_tnt_results",
        "ProjectsCardImage": project_pictures['projects_tnt.jpg'],
        "ProjectGalMainImage": project_pictures['proj-tnt-main-track.jpg'],
        "ProjectGalSubImage1": project_pictures['proj-tnt-data-driven.png'],
        "ProjectGalSubImage2": project_pictures['proj-ci-cd.png'],
        "Tools": [
            tools['tool-amplitude.png'],
            tools['tool-buildkite.png'],
            tools['tool-pytest.png'],
            tools['tool-appium.jpg'],
            tools['tool-awsdevicefarm.jpg'],
            tools['tool-discord.jpg'],
            tools['tool-docker.jpg'],
            tools['tool-firebase.png'],
            tools['tool-jira.jpg'],
            tools['tool-xray.jpg'],
            tools['tool-notion.png'],
            tools['tool-Pycharm.png'],
            tools['tool-python.png'],
            tools['tool-testrail.jpg'],
            tools['tool-xcode.webp'],
            tools['tool-androidstudio.png']
        ]
      },
      {
        "ProjectName": "Randstad",
        "ProjectCard": "card-Randstad",
        "ProjectGalId": "gallery-Randstad",
        "ProjectDesc": "project_rand_desc",
        "ProjectResults": "project_rand_results",
        "ProjectsCardImage": project_pictures['projects_randstad.jpg'],
        "ProjectGalMainImage": project_pictures['proj-randstad-mainwerkplanning.jpg'],
        "ProjectGalSubImage1": project_pictures['proj-randstad-customerfirst.png'],
        "ProjectGalSubImage2": project_pictures['proj-randstad-bdd.png'],
        "Tools": [
            tools['tool-amplitude.png'],
            tools['tool-buildkite.png'],
            tools['tool-pytest.png'],
            tools['tool-appium.jpg'],
            tools['tool-awsdevicefarm.jpg'],
            tools['tool-discord.jpg'],
            tools['tool-docker.jpg'],
            tools['tool-firebase.png'],
            tools['tool-jira.jpg'],
            tools['tool-xray.jpg'],
            tools['tool-notion.png'],
            tools['tool-Pycharm.png'],
            tools['tool-python.png'],
            tools['tool-testrail.jpg'],
            tools['tool-xcode.webp'],
            tools['tool-androidstudio.png']
        ]
      },
      {
        "ProjectName": "DJI",
        "ProjectCard": "card-DJI",
        "ProjectGalId": "gallery-DJI",
        "ProjectDesc": "project_dji_desc",
        "ProjectResults": "project_dji_results",
        "ProjectsCardImage": project_pictures['projects_minJus.jpg'],
        "ProjectGalMainImage": project_pictures['proj-minjus-maingev.jpg'],
        "ProjectGalSubImage1": project_pictures['proj-minjus-complex.png'],
        "ProjectGalSubImage2": project_pictures['proj-minjus-together.png'],
        "Tools": [
            tools['tool-amplitude.png'],
            tools['tool-buildkite.png'],
            tools['tool-pytest.png'],
            tools['tool-appium.jpg'],
            tools['tool-awsdevicefarm.jpg'],
            tools['tool-discord.jpg'],
            tools['tool-docker.jpg'],
            tools['tool-firebase.png'],
            tools['tool-jira.jpg'],
            tools['tool-xray.jpg'],
            tools['tool-notion.png'],
            tools['tool-Pycharm.png'],
            tools['tool-python.png'],
            tools['tool-testrail.jpg'],
            tools['tool-xcode.webp'],
            tools['tool-androidstudio.png']
        ]
      }
    ]


class Projects extends Component {

openGallery (id, event) {
  this.closeAll();
  var gallery = document.getElementById('gallery-' + id);
  var card = document.getElementById('card-' + id);
  gallery.classList.add('Gallery--active');
  card.classList.add('Card--active');
  ReactGA.event({
      category: 'KoolIT site click',
      action: 'Open project gallery',
      label: id
  })
}

closeAll () {
  var galleryActv = document.querySelector('.Gallery--active');
  var cardActv = document.querySelector('.Card--active');

  if (galleryActv) {
    galleryActv.classList.remove('Gallery--active');
  }

  if (cardActv) {
    cardActv.classList.remove('Card--active');
  }
  ReactGA.event({
      category: 'KoolIT site click',
      action: 'Closed project gallery',
  })
}


  render() {

  	  const { t } = this.props;


  	  const projectItem = completeProject.map(function(project){

  	        const openGallery = (id, event) => {
               //this.closeAll();
               var gallery = document.getElementById('gallery-' + id);
               var card = document.getElementById('card-' + id);
               gallery.classList.add('Gallery--active');
               card.classList.add('Card--active');
               ReactGA.event({
                   category: 'KoolIT site click',
                   action: 'Open project gallery',
                   label: id
               })
            }

            return <a class="Card" id={project.ProjectCard} onClick={(event) => openGallery(project.ProjectName)}>
                  <div class="Card-thumb">
                      <div class="Card-shadow"></div>
                      <div class="Card-shadow"></div>
                      <div class="Card-shadow"></div>
                      <div class="Card-image" style={{backgroundImage: "url(" + project.ProjectsCardImage + ")"}}></div>
                  </div>
                  <div class="Card-title"><span>{t('project_logo_hover')}</span></div>
                  <div class="Card-explore"><span> {t('project_details_activities')}</span></div>
                  <button class="Card-button">{t('project_click_here')}</button>
              </a>
      })

  	  const galleryItem = completeProject.map(function(project){

  	        const closeAll = () => {
                var galleryActv = document.querySelector('.Gallery--active');
                var cardActv = document.querySelector('.Card--active');

                if (galleryActv) {
                  galleryActv.classList.remove('Gallery--active');
                }

                if (cardActv) {
                  cardActv.classList.remove('Card--active');
                }
                ReactGA.event({
                    category: 'KoolIT site click',
                    action: 'Closed project gallery',
                })
            }

  	        return <section class="Gallery" id={project.ProjectGalId} onClick={() => closeAll()}>
                <div class="Gallery-header">
                  <a class="Gallery-close" onClick={() => closeAll()}>×</a>
                </div>
         	    <h1 class="projects_top_header">Project details</h1>
                	<p class="projects_text">{t(project.ProjectDesc)}</p>
                <div class="Gallery-images">
                    <div class="Gallery-left">
                        <div class="Gallery-image" style={{backgroundImage: "url(" + project.ProjectGalSubImage1 + ")", width: "15rem", height: "9.5rem"}}></div>
                        <div class="Gallery-image" style={{backgroundImage: "url(" + project.ProjectGalSubImage2 + ")", width: "15rem", height: "9.5rem"}}></div>
                    </div>
                    <div class="Gallery-image Gallery-image--primary" style={{backgroundImage: "url(" + project.ProjectGalMainImage + ")"}}></div>
                </div>
                    	<h1 class="projects_header">{t('project_activities')}</h1>
                    	<p class="projects_text" style={{whiteSpace: "pre-line"}}>{t(project.ProjectResults)}</p>
                    	<h1 class="projects_header">{t('project_tools')}</h1>
                <div class="Gallery-images" style={{ flexDirection: "row", flexWrap: "wrap" }}>
                    {project.Tools.map(i => {
                        return <div class="Gallery-image" style={{backgroundImage: "url(" + i + ")", margin: "1%"}}></div>
                    })}
                </div>
                <Button colored onClick={() => closeAll()} style={{marginLeft: "70%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('project_gallery_close')}</Button>
            </section>
      })

      return(
            <div className="projects-grid">

            <section class="Grid">

                <div class="Grid-row">

                    {projectItem}

                 </div>

            </section>

            {galleryItem}

        </div>
      )
  }
}

export default withNamespaces()(Projects);