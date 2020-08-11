import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import { Button } from 'react-mdl';
import ReactGA from 'react-ga';
import importAll from '../importAll';


const project_pictures = importAll(require.context('../images/organizations/projects', false, /\.(png|jpe?g)$/));
const tools = importAll(require.context('../images/tools', false, /\.(png|jpe?g)$/));


const completeProject = [
      {
        "ProjectName": "Zenly",
        "ProjectCard": "card-Zenly",
        "ProjectGalId": "gallery-Zenly",
        "ProjectsCardImage": project_pictures['projects-zenly.jpg'],
        "ProjectGalMainImage": project_pictures['proj-zenly-mainapp'],
        "ProjectGalSubImage1": project_pictures['proj-zenly-iosandr'],
        "ProjectGalSubImage1": project_pictures['proj-zenly-snapzen'],
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
        "ProjectsCardImage": project_pictures['projects-transavia.png'],
        "ProjectGalMainImage": project_pictures['proj-trans-mainplane'],
        "ProjectGalSubImage1": project_pictures['proj-trans-covid'],
        "ProjectGalSubImage1": project_pictures['proj-trans-support'],
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
        "ProjectsCardImage": project_pictures['projects_rabo.jpg'],
        "ProjectGalMainImage": project_pictures['proj-rabo-wonen.svg'],
        "ProjectGalSubImage1": project_pictures['proj-rabo-bdd.png'],
        "ProjectGalSubImage1": project_pictures['proj-rabo-im.png'],
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
        "ProjectsCardImage": project_pictures['projects-ah.png'],
        "ProjectGalMainImage": project_pictures['proj-ah-mainfloorplan.jpg'],
        "ProjectGalSubImage1": project_pictures['proj-ah-database.jpg'],
        "ProjectGalSubImage1": project_pictures['proj-ah-sql.png'],
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
        "ProjectsCardImage": project_pictures['projects-fedex-logo.png'],
        "ProjectGalMainImage": project_pictures['proj-fedex-maintotnt.jpg'],
        "ProjectGalSubImage1": project_pictures['proj-fedex-mvp.jpg'],
        "ProjectGalSubImage1": project_pictures['proj-fedex-scrum.png'],
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
        "ProjectsCardImage": project_pictures['projects_tnt.jpg'],
        "ProjectGalMainImage": project_pictures['proj-tnt-main-track.jpg'],
        "ProjectGalSubImage1": project_pictures['proj-tnt-data-driven.png'],
        "ProjectGalSubImage1": project_pictures['proj-ci-cd.png'],
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
        "ProjectsCardImage": project_pictures['projects_randstad.jpg'],
        "ProjectGalMainImage": project_pictures['proj-randstad-mainwerkplanning.jpg'],
        "ProjectGalSubImage1": project_pictures['proj-randstad-customerfirst.png'],
        "ProjectGalSubImage1": project_pictures['proj-randstad-bdd.png'],
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
        "ProjectsCardImage": project_pictures['projects_minJus.jpg'],
        "ProjectGalMainImage": project_pictures['proj-minjus-maingev.jpg'],
        "ProjectGalSubImage1": project_pictures['proj-minjus-complex.png'],
        "ProjectGalSubImage1": project_pictures['proj-minjus-together.png'],
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

       return <a class="Card" id={project.ProjectCard} onClick={(event) => this.openGallery(project.ProjectCard)}>
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
  	    return <section class="Gallery" id="gallery-Rabobank" onClick={() => this.closeAll()}>
            <div class="Gallery-header">
              <a class="Gallery-close" onClick={() => this.closeAll()}>×</a>
            </div>
         	<h1 class="projects_top_header">Project details</h1>
            	<p class="projects_text">{t('project1_desc')}</p>
            <div class="Gallery-images">
                <div class="Gallery-left">
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.impactmapping.org/assets/im_template.png)", width: "15rem", height: "9.5rem"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://i0.wp.com/s3.amazonaws.com/production-wordpress-assets/blog/wp-content/uploads/2017/05/02111751/behavior-driven-development.png?fit=540%2C270&ssl=1)", width: "15rem", height: "9.5rem"}}></div>
                </div>
                <div class="Gallery-image Gallery-image--primary" style={{backgroundImage: "url(https://www.rabobank.nl/images/huis%20waarde%20rgb%20tr2_291051499.svg)"}}></div>
            </div>
                	<h1 class="projects_header">{t('project_activities')}</h1>
                	<p class="projects_text" style={{whiteSpace: "pre-line"}}>{t('project1_results')}</p>
                	<h1 class="projects_header">{t('project_tools')}</h1>
            <div class="Gallery-images">
                <div class="Gallery-image" style={{backgroundImage: "url(https://www.steadylearner.com/static/images/code/cypress.png)"}}></div>
                <div class="Gallery-image" style={{backgroundImage: "url(https://d-media.nl/sites/default/files/styles/header_visual_small/public/blog/googleanalytics-2.png.jpg?itok=G2WQej1g)"}}></div>
                <div class="Gallery-image" style={{backgroundImage: "url(https://xebialabs.com/wp-content/uploads/files/tool-chest/protractor.jpg)"}}></div>
                <div class="Gallery-image" style={{backgroundImage: "url(https://i2.wp.com/grantnorwood.com/app/uploads/2017/07/webdriver-io-logo.png?fit=1200%2C632&ssl=1)"}}></div>
                <div class="Gallery-image" style={{backgroundImage: "url(https://hackernoon.com/hn-images/1*_OZPYJAdq4IuOXmG5dGC2A.png)"}}></div>
                <div class="Gallery-image" style={{backgroundImage: "url(https://3.bp.blogspot.com/-fw4AXGadQSk/WA3zt1SqwzI/AAAAAAAAPBg/5xfO8DWkAIg9KA47rBUbhMJryC4vmU0gQCLcB/s1600/Screen%2BShot%2B2016-10-24%2Bat%2B5.12.06%2BPM.png)"}}></div>
            </div>
            <div class="Gallery-images">
                <div class="Gallery-image" style={{backgroundImage: "url(https://cdn-images.threadless.com/threadless-media/artist_shops/shops/cucumberbdd/products/331109/shirt-1506698959-892d215946bfe35c7925c81fe8298354.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19)"}}></div>
                <div class="Gallery-image" style={{backgroundImage: "url(https://admin.happyidiots.nl/wp-content/uploads/2016/10/Google-Data-Studio.jpg)"}}></div>
                <div class="Gallery-image" style={{backgroundImage: "url(https://www.programsbuzz.com/sites/default/files/inline-images/MobileDevTest_Blog-700x300%20%281%29.jpg)"}}></div>
                <div class="Gallery-image" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/assertible/integrations/postman-logo-horizontal.png)"}}></div>
                <div class="Gallery-image" style={{backgroundImage: "url(https://xebialabs.com/wp-content/uploads/files/tool-chest/gatling.jpg)"}}></div>
                <div class="Gallery-image" style={{backgroundImage: "url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/108859509/original/ddb7edfac989723e263404fedb528ab499674323/help-you-set-up-jira-and-confluence.png)"}}></div>
            </div>
            <div class="Gallery-images">
                <div class="Gallery-image" style={{backgroundImage: "url(https://lucasvidelaine.files.wordpress.com/2018/01/jenkins1.png?w=822)"}}></div>
                <div class="Gallery-image" style={{backgroundImage: "url(https://www.bujarra.com/wp-content/uploads/2018/11/kibana0-978x500.jpg"}}></div>
                <div class="Gallery-image" style={{backgroundImage: "url(https://cdn.dribbble.com/users/18069/screenshots/762796/bitbucket_logo.png)"}}></div>
                <div class="Gallery-image" style={{backgroundImage: "url(https://www.freelancinggig.com/blog/wp-content/uploads/2018/10/Apache-Maven-its-uses.jpeg)"}}></div>
                <div class="Gallery-image" style={{backgroundImage: "url(https://www.laramind.com/blog/wp-content/uploads/2018/06/Untitled-design-8-620x420.png)"}}></div>
                <div class="Gallery-image" style={{backgroundImage: "url(https://www.1ere-position.fr/wp-content/uploads/2018/05/google-lighthouse-plugin-seo.png)"}}></div>
            </div>
            <Button colored onClick={() => this.closeAll()} style={{marginLeft: "80%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('project_gallery_close')}</Button>
        </section>

        //if (tools <= 6) {
        //  return <Hour />;
        //} else if (tools > 6 && tools <= 12) {
        //  return <Minute />;
        //} else if (tools >12 && tools <=18) {
        //  return <Second />;
        //} else if (tools >18 && tools <=24) {
        //  return <Ampm />;
        //} else {
        //  return <h1>Expand Tools Section</h1>;
        //}
        })

      return(
            <div className="projects-grid">

            <section class="Grid">

                <div class="Grid-row">

                    {projectItem}

                 </div>

            </section>

            <section class="Gallery" id="gallery-Rabobank" onClick={() => this.closeAll()}>
                <div class="Gallery-header">
                  <a class="Gallery-close" onClick={() => this.closeAll()}>×</a>
                </div>
            	<h1 class="projects_top_header">Project details</h1>
                	<p class="projects_text">{t('project1_desc')}</p>
                <div class="Gallery-images">
                    <div class="Gallery-left">
                        <div class="Gallery-image" style={{backgroundImage: "url(https://www.impactmapping.org/assets/im_template.png)", width: "15rem", height: "9.5rem"}}></div>
                        <div class="Gallery-image" style={{backgroundImage: "url(https://i0.wp.com/s3.amazonaws.com/production-wordpress-assets/blog/wp-content/uploads/2017/05/02111751/behavior-driven-development.png?fit=540%2C270&ssl=1)", width: "15rem", height: "9.5rem"}}></div>
                    </div>
                    <div class="Gallery-image Gallery-image--primary" style={{backgroundImage: "url(https://www.rabobank.nl/images/huis%20waarde%20rgb%20tr2_291051499.svg)"}}></div>
                </div>
                    	<h1 class="projects_header">{t('project_activities')}</h1>
                    	<p class="projects_text" style={{whiteSpace: "pre-line"}}>{t('project1_results')}</p>
                    	<h1 class="projects_header">{t('project_tools')}</h1>
                <div class="Gallery-images">
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.steadylearner.com/static/images/code/cypress.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://d-media.nl/sites/default/files/styles/header_visual_small/public/blog/googleanalytics-2.png.jpg?itok=G2WQej1g)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://xebialabs.com/wp-content/uploads/files/tool-chest/protractor.jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://i2.wp.com/grantnorwood.com/app/uploads/2017/07/webdriver-io-logo.png?fit=1200%2C632&ssl=1)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://hackernoon.com/hn-images/1*_OZPYJAdq4IuOXmG5dGC2A.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://3.bp.blogspot.com/-fw4AXGadQSk/WA3zt1SqwzI/AAAAAAAAPBg/5xfO8DWkAIg9KA47rBUbhMJryC4vmU0gQCLcB/s1600/Screen%2BShot%2B2016-10-24%2Bat%2B5.12.06%2BPM.png)"}}></div>
                </div>
                <div class="Gallery-images">
                    <div class="Gallery-image" style={{backgroundImage: "url(https://cdn-images.threadless.com/threadless-media/artist_shops/shops/cucumberbdd/products/331109/shirt-1506698959-892d215946bfe35c7925c81fe8298354.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://admin.happyidiots.nl/wp-content/uploads/2016/10/Google-Data-Studio.jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.programsbuzz.com/sites/default/files/inline-images/MobileDevTest_Blog-700x300%20%281%29.jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/assertible/integrations/postman-logo-horizontal.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://xebialabs.com/wp-content/uploads/files/tool-chest/gatling.jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/108859509/original/ddb7edfac989723e263404fedb528ab499674323/help-you-set-up-jira-and-confluence.png)"}}></div>
                </div>
                <div class="Gallery-images">
                    <div class="Gallery-image" style={{backgroundImage: "url(https://lucasvidelaine.files.wordpress.com/2018/01/jenkins1.png?w=822)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.bujarra.com/wp-content/uploads/2018/11/kibana0-978x500.jpg"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://cdn.dribbble.com/users/18069/screenshots/762796/bitbucket_logo.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.freelancinggig.com/blog/wp-content/uploads/2018/10/Apache-Maven-its-uses.jpeg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.laramind.com/blog/wp-content/uploads/2018/06/Untitled-design-8-620x420.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.1ere-position.fr/wp-content/uploads/2018/05/google-lighthouse-plugin-seo.png)"}}></div>
                </div>
                <Button colored onClick={() => this.closeAll()} style={{marginLeft: "80%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('project_gallery_close')}</Button>
            </section>

            <section class="Gallery" id="gallery-AH" onClick={() => this.closeAll()}>
                <div class="Gallery-header">
                  <a class="Gallery-close" onClick={() => this.closeAll()}>×</a>
                </div>
            	<h1 class="projects_top_header">Project details</h1>
                	<p class="projects_text">{t('project2_desc')}</p>
                <div class="Gallery-images">
                    <div class="Gallery-left">
                        <div class="Gallery-image" style={{backgroundImage: "url(https://webhostblog.al/wp-content/uploads/2017/09/145932-636322786167815615-16x9.jpg)", width: "15rem", height: "9.5rem"}}></div>
                        <div class="Gallery-image" style={{backgroundImage: "url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/113405115/original/2a22e1e884426584c52d829a2c5fc958ad46752c/do-complex-sql-queries.jpg)", width: "15rem", height: "9.5rem"}}></div>
                    </div>
                    <div class="Gallery-image Gallery-image--primary" style={{backgroundImage: "url(https://foodretaildesign.nl/wp-content/uploads/2016/11/plattegrond_AH_XL_Purmerend.jpg)"}}></div>
                </div>
                    	<h1 class="projects_header">{t('project_activities')}</h1>
                    	<p class="projects_text" style={{whiteSpace: "pre-line"}}>{t('project2_results')}</p>
                    	<h1 class="projects_header">{t('project_tools')}</h1>
                <div class="Gallery-images">
                    <div class="Gallery-image" style={{backgroundImage: "url(https://lh3.googleusercontent.com/proxy/WIu5_dJZQQKDCxGXR9bZeOsGls5i0t6S_-X8gxIx6LOkLRLIo1zk4RMTUKNRPoQe--x73R3uSZQIP9onvslVG6WAjfmksPPqzsyf8-jnudO0yJXNzOLgE1Ff_pYmch5t4OiNc1hU_w)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://cdn.rc-static.com/images/ProductImages/ScaleProducts/A4932025_I2.jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://cfvod.kaltura.com/p/2171811/sp/217181100/thumbnail/entry_id/1_nwi1r5av/version/100011/width/388/height/218)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://kevinekline.com/wp-content/uploads/2010/06/toad-01.jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://img-19.ccm2.net/G3PNuvxbBmAP3vbJ2D1ZyPHPPWo=/300x/d12f321b4ae84442947ceea5958084b9/ccm-download/34060267-f5Ajf670YpHlssEF-s-.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://3.bp.blogspot.com/-fw4AXGadQSk/WA3zt1SqwzI/AAAAAAAAPBg/5xfO8DWkAIg9KA47rBUbhMJryC4vmU0gQCLcB/s1600/Screen%2BShot%2B2016-10-24%2Bat%2B5.12.06%2BPM.png)"}}></div>
                </div>
                <div class="Gallery-images">
                    <div class="Gallery-image" style={{backgroundImage: "url(https://cdn-images.threadless.com/threadless-media/artist_shops/shops/cucumberbdd/products/331109/shirt-1506698959-892d215946bfe35c7925c81fe8298354.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://learn-automation.com/wp-content/uploads/2016/05/selenium.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://cdn.dribbble.com/users/18069/screenshots/762796/bitbucket_logo.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://lucasvidelaine.files.wordpress.com/2018/01/jenkins1.png?w=822)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.master-it.nl/media/193057748_wat-is-citrix[1513].jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/108859509/original/ddb7edfac989723e263404fedb528ab499674323/help-you-set-up-jira-and-confluence.png)"}}></div>
                </div>
                <Button colored onClick={() => this.closeAll()} style={{marginLeft: "80%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('project_gallery_close')}</Button>
            </section>

            <section class="Gallery" id="gallery-FedEx" onClick={() => this.closeAll()}>
                <div class="Gallery-header">
                  <a class="Gallery-close" onClick={() => this.closeAll()}>×</a>
                </div>
            	<h1 class="projects_top_header">Project details</h1>
                	<p class="projects_text">{t('project3_desc')}</p>
                <div class="Gallery-images">
                    <div class="Gallery-left">
                        <div class="Gallery-image" style={{backgroundImage: "url(https://agilescrumgroup.nl/wp-content/uploads/ASG_alg-Scrum-Framework.png)", width: "15rem", height: "9.5rem"}}></div>
                        <div class="Gallery-image" style={{backgroundImage: "url(https://www.easternenterprise.com/wp-content/uploads/2019/06/CHALLENGES-IN-CREATING-AN-MVP-1030x387.jpg)", width: "15rem", height: "9.5rem"}}></div>
                    </div>
                    <div class="Gallery-image Gallery-image--primary" style={{backgroundImage: "url(https://www.supplychain247.com/images/article/fedex_tnt_executives_provide_insights_wide_image.jpg)"}}></div>
                </div>
                    	<h1 class="projects_header">{t('project_activities')}</h1>
                    	<p class="projects_text" style={{whiteSpace: "pre-line"}}>{t('project3_results')}</p>
                    	<h1 class="projects_header">{t('project_tools')}</h1>
                <div class="Gallery-images">
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.steadylearner.com/static/images/code/cypress.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://d-media.nl/sites/default/files/styles/header_visual_small/public/blog/googleanalytics-2.png.jpg?itok=G2WQej1g)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://xebialabs.com/wp-content/uploads/files/tool-chest/protractor.jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://blog.newrelic.com/wp-content/uploads/New_Relic_Insights_logo.jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://lh3.googleusercontent.com/belsQbPnt0N-5u5TRLJQR-LWa479ao52kxbXPUfFe_cW7euS8KUN7neQyIhJ4cwOljtXiNH2gI2XNlcQ0wKIywC8BQ)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://xebialabs.com/wp-content/uploads/files/tool-chest/browserstack.jpg)"}}></div>
                </div>
                <div class="Gallery-images">
                    <div class="Gallery-image" style={{backgroundImage: "url(https://cdn-images.threadless.com/threadless-media/artist_shops/shops/cucumberbdd/products/331109/shirt-1506698959-892d215946bfe35c7925c81fe8298354.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.runscope.com/static/img/public/share-image.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.flexihub.com/images/upload/flexihub/articles/rs232/Xcode-logo-1.jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/assertible/integrations/postman-logo-horizontal.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://portswigger.net/content/images/logos/burpsuite-twittercard.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/108859509/original/ddb7edfac989723e263404fedb528ab499674323/help-you-set-up-jira-and-confluence.png)"}}></div>
                </div>
                <div class="Gallery-images">
                    <div class="Gallery-image" style={{backgroundImage: "url(https://lucasvidelaine.files.wordpress.com/2018/01/jenkins1.png?w=822)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.bujarra.com/wp-content/uploads/2018/11/kibana0-978x500.jpg"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://cdn.dribbble.com/users/18069/screenshots/762796/bitbucket_logo.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://i1.wp.com/www.tech365.nl/wp-content/uploads/2015/06/Synology_Docker_DSM52_tech365_000.jpg?fit=555%2C418&ssl=1)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.laramind.com/blog/wp-content/uploads/2018/06/Untitled-design-8-620x420.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url()"}}></div>
                </div>
                <Button colored onClick={() => this.closeAll()} style={{marginLeft: "80%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('project_gallery_close')}</Button>
            </section>

            <section class="Gallery" id="gallery-TNT" onClick={() => this.closeAll()}>
                <div class="Gallery-header">
                  <a class="Gallery-close" onClick={() => this.closeAll()}>×</a>
                </div>
            	<h1 class="projects_top_header">Project details</h1>
                	<p class="projects_text">{t('project4_desc')}</p>
                <div class="Gallery-images">
                    <div class="Gallery-left">
                        <div class="Gallery-image" style={{backgroundImage: "url(https://www.e-nor.com/wp-content/uploads/2019/03/data-driven-thumb.png)", width: "15rem", height: "9.5rem"}}></div>
                        <div class="Gallery-image" style={{backgroundImage: "url(https://www.renedohmen.nl/blog/wp-content/uploads/2018/03/blogpic-32.png)", width: "15rem", height: "9.5rem"}}></div>
                    </div>
                    <div class="Gallery-image Gallery-image--primary" style={{backgroundImage: "url(https://www.blue-growth.org/Blue_Growth_Technology_Innovation/AmphiMax/Pictures_AmphiMax/TNT_Shipment_74096817_Track_Trace_Chris_Bury_Blackburn_Concrete_Vibrator.jpg)"}}></div>
                </div>
                    	<h1 class="projects_header">{t('project_activities')}</h1>
                    	<p class="projects_text" style={{whiteSpace: "pre-line"}}>{t('project4_results')}</p>
                    	<h1 class="projects_header">{t('project_tools')}</h1>
                <div class="Gallery-images">
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.runscope.com/static/img/public/share-image.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://d-media.nl/sites/default/files/styles/header_visual_small/public/blog/googleanalytics-2.png.jpg?itok=G2WQej1g)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://xebialabs.com/wp-content/uploads/files/tool-chest/protractor.jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.flexihub.com/images/upload/flexihub/articles/rs232/Xcode-logo-1.jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://xebialabs.com/wp-content/uploads/files/tool-chest/browserstack.jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://blog.newrelic.com/wp-content/uploads/New_Relic_Insights_logo.jpg)"}}></div>
                </div>
                <div class="Gallery-images">
                    <div class="Gallery-image" style={{backgroundImage: "url(https://cdn-images.threadless.com/threadless-media/artist_shops/shops/cucumberbdd/products/331109/shirt-1506698959-892d215946bfe35c7925c81fe8298354.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://media-exp1.licdn.com/dms/image/C4D12AQGeYWoWiuBtZw/article-cover_image-shrink_720_1280/0?e=1586995200&v=beta&t=7IdLXe0-VMl1gG985eQHrjhyGl4aiHxTmC5-ewvgHFY)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://media-exp1.licdn.com/dms/image/C4E0BAQHV1Wk1ctsv5w/company-logo_200_200/0?e=2159024400&v=beta&t=m_zD_kFsPnF5aZ7QxYS8xGtF5k4RgTwGaNT80HyWmsA)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://s3-us-west-2.amazonaws.com/assertible/integrations/postman-logo-horizontal.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://i1.wp.com/www.tech365.nl/wp-content/uploads/2015/06/Synology_Docker_DSM52_tech365_000.jpg?fit=555%2C418&ssl=1)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/108859509/original/ddb7edfac989723e263404fedb528ab499674323/help-you-set-up-jira-and-confluence.png)"}}></div>
                </div>
                <div class="Gallery-images">
                    <div class="Gallery-image" style={{backgroundImage: "url(https://lucasvidelaine.files.wordpress.com/2018/01/jenkins1.png?w=822)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.bujarra.com/wp-content/uploads/2018/11/kibana0-978x500.jpg"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://cdn.dribbble.com/users/18069/screenshots/762796/bitbucket_logo.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.unixtutorial.org/images/virtualbox-logo.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.laramind.com/blog/wp-content/uploads/2018/06/Untitled-design-8-620x420.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://cfvod.kaltura.com/p/2171811/sp/217181100/thumbnail/entry_id/1_nwi1r5av/version/100011/width/388/height/218)"}}></div>
                </div>
                <Button colored onClick={() => this.closeAll()} style={{marginLeft: "80%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('project_gallery_close')}</Button>
            </section>

            <section class="Gallery" id="gallery-Randstad" onClick={() => this.closeAll()}>
                <div class="Gallery-header">
                  <a class="Gallery-close" onClick={() => this.closeAll()}>×</a>
                </div>
            	<h1 class="projects_top_header">Project details</h1>
                	<p class="projects_text">{t('project5_desc')}</p>
                <div class="Gallery-images">
                    <div class="Gallery-left">
                        <div class="Gallery-image" style={{backgroundImage: "url(https://www.scaledagileframework.com/wp-content/uploads/2018/09/Behavior-Driven-Development_F01_HI-RES.png)", width: "15rem", height: "9.5rem"}}></div>
                        <div class="Gallery-image" style={{backgroundImage: "url(https://www.future-processing.pl/blog/wp-content/uploads/2014/10/blog_techniczny_bdd.png)", width: "15rem", height: "9.5rem"}}></div>
                    </div>
                    <div class="Gallery-image Gallery-image--primary" style={{backgroundImage: "url(https://lh3.googleusercontent.com/proxy/jBYkCy0EHCfXrBxlt5gjtkyCgj4yrD2eEel3JXUjbxARj1M2TKY9svc51xHUQupm-FbGfoQp8U1zrXSzZyI-HLeNKWMpGAxD3F2svox1cETg94wl9vDcfzC-lt7AZ_qM6VWbdJY9W1o)"}}></div>
                </div>
                    	<h1 class="projects_header">{t('project_activities')}</h1>
                    	<p class="projects_text" style={{whiteSpace: "pre-line"}}>{t('project5_results')}</p>
                    	<h1 class="projects_header">{t('project_tools')}</h1>
                <div class="Gallery-images">
                    <div class="Gallery-image" style={{backgroundImage: "url(https://skyose.com/wp-content/uploads/2018/10/SoapUI-logo.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://kevinekline.com/wp-content/uploads/2010/06/toad-01.jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://img-19.ccm2.net/G3PNuvxbBmAP3vbJ2D1ZyPHPPWo=/300x/d12f321b4ae84442947ceea5958084b9/ccm-download/34060267-f5Ajf670YpHlssEF-s-.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://gasparnagy.com/wp-content/uploads/2016/07/specflow.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://learn-automation.com/wp-content/uploads/2016/05/selenium.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://xebialabs.com/wp-content/uploads/files/tool-chest/gatling.jpg)"}}></div>
                </div>
                <div class="Gallery-images">
                    <div class="Gallery-image" style={{backgroundImage: "url(https://cdn-images.threadless.com/threadless-media/artist_shops/shops/cucumberbdd/products/331109/shirt-1506698959-892d215946bfe35c7925c81fe8298354.png?v=3&d=eyJvbmx5X21ldGEiOiBmYWxzZSwgImZvcmNlIjogZmFsc2UsICJvcHMiOiBbWyJ0cmltIiwgW2ZhbHNlLCBmYWxzZV0sIHt9XSwgWyJyZXNpemUiLCBbXSwgeyJ3aWR0aCI6IDk5Ni4wLCAiYWxsb3dfdXAiOiBmYWxzZSwgImhlaWdodCI6IDk5Ni4wfV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzEyMDAsIDEyMDBdLCB7ImJhY2tncm91bmQiOiAiZmZmZmZmIn1dLCBbInJlc2l6ZSIsIFs4MDBdLCB7fV0sIFsiY2FudmFzX2NlbnRlcmVkIiwgWzgwMCwgODAwLCAiI2ZmZmZmZiJdLCB7fV0sIFsiZW5jb2RlIiwgWyJqcGciLCA4NV0sIHt9XV19)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/108859509/original/ddb7edfac989723e263404fedb528ab499674323/help-you-set-up-jira-and-confluence.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://lucasvidelaine.files.wordpress.com/2018/01/jenkins1.png?w=822)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url()"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url()"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url()"}}></div>
                </div>
                <Button colored onClick={() => this.closeAll()} style={{marginLeft: "80%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('project_gallery_close')}</Button>
            </section>

            <section class="Gallery" id="gallery-DJI" onClick={() => this.closeAll()}>
                <div class="Gallery-header">
                  <a class="Gallery-close" onClick={() => this.closeAll()}>×</a>
                </div>
            	<h1 class="projects_top_header">Project details</h1>
                	<p class="projects_text">{t('project6_desc')}</p>
                <div class="Gallery-images">
                    <div class="Gallery-left">
                        <div class="Gallery-image" style={{backgroundImage: "url(https://libraryeuroparl.files.wordpress.com/2014/11/eprs-aag-542142-open-method-of-coordination.png)", width: "15rem", height: "9.5rem"}}></div>
                        <div class="Gallery-image" style={{backgroundImage: "url(https://primaned.be/wp-content/uploads/2019/06/project-change-management-header@2x.png)", width: "15rem", height: "9.5rem"}}></div>
                    </div>
                    <div class="Gallery-image Gallery-image--primary" style={{backgroundImage: "url(https://nos.nl/data/image/2019/11/05/590326/2048x1152.jpg)"}}></div>
                </div>
                    	<h1 class="projects_header">{t('project_activities')}</h1>
                    	<p class="projects_text" style={{whiteSpace: "pre-line"}}>{t('project6_results')}</p>
                    	<h1 class="projects_header">{t('project_tools')}</h1>
                <div class="Gallery-images">
                    <div class="Gallery-image" style={{backgroundImage: "url(https://skyose.com/wp-content/uploads/2018/10/SoapUI-logo.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://mark.trademarkia.com/logo-images/progress-software-corporation/progress-sonic-77217028.jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://seekvectorlogo.com/wp-content/uploads/2019/05/altova-xmlspy-vector-logo.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://cfvod.kaltura.com/p/2171811/sp/217181100/thumbnail/entry_id/1_nwi1r5av/version/100011/width/388/height/218)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.master-it.nl/media/193057748_wat-is-citrix[1513].jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://bs-uploads.toptal.io/blackfish-uploads/skill_page/content/logo_file/logo/6370/JIRA_logo-e5a9c767df8a60eb2d242a356ce3fdca.jpg)"}}></div>
                </div>
                <Button colored onClick={() => this.closeAll()} style={{marginLeft: "80%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('project_gallery_close')}</Button>
            </section>

            <section class="Gallery" id="gallery-Transavia" onClick={() => this.closeAll()}>
                <div class="Gallery-header">
                  <a class="Gallery-close" onClick={() => this.closeAll()}>×</a>
                </div>
            	<h1 class="projects_top_header">Project details</h1>
                	<p class="projects_text">{t('project7_desc')}</p>
                <div class="Gallery-images">
                    <div class="Gallery-left">
                        <div class="Gallery-image" style={{backgroundImage: "url(https://pbs.twimg.com/media/ETADqhSXgAAIZsN.png)", width: "15rem", height: "9.5rem"}}></div>
                        <div class="Gallery-image" style={{backgroundImage: "url(https://img.freepik.com/vecteurs-libre/personne-qui-travaille-appui_1212-37.jpg?size=338&ext=jpg)", width: "15rem", height: "9.5rem"}}></div>
                    </div>
                    <div class="Gallery-image Gallery-image--primary" style={{backgroundImage: "url(https://www.dutchnews.nl/wpcms/wp-content/uploads/2020/02/Transavia_3-e1581498148756.jpg)"}}></div>
                </div>
                    	<h1 class="projects_header">{t('project_activities')}</h1>
                    	<p class="projects_text" style={{whiteSpace: "pre-line"}}>{t('project7_results')}</p>
                    	<h1 class="projects_header">{t('project_tools')}</h1>
                <div class="Gallery-images">
                    <div class="Gallery-image" style={{backgroundImage: "url(https://xebialabs.com/wp-content/uploads/files/tool-chest/specflow.jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/108859509/original/ddb7edfac989723e263404fedb528ab499674323/help-you-set-up-jira-and-confluence.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://i2.wp.com/www.ylneo.com/wp-content/uploads/2019/11/teams-1.png?resize=1080%2C528&ssl=1)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.emerce.nl/content/uploads/2018/08/Pega-430x400.jpg)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url(https://www.kindpng.com/picc/m/13-131087_visual-studio-2019-official-logo-visual-studio-2010.png)"}}></div>
                    <div class="Gallery-image" style={{backgroundImage: "url()"}}></div>
                </div>
                <Button colored onClick={() => this.closeAll()} style={{marginLeft: "80%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('project_gallery_close')}</Button>
            </section>

            <section class="Gallery" id="gallery-Zenly" onClick={() => this.closeAll()}>
                <div class="Gallery-header">
                  <a class="Gallery-close" onClick={() => this.closeAll()}>×</a>
                </div>
            	<h1 class="projects_top_header">Project details</h1>
                	<p class="projects_text">{t('project8_desc')}</p>
                <div class="Gallery-images">
                    <div class="Gallery-left">
                        <div class="Gallery-image" style={{backgroundImage: "url(https://www.qoodos.fr/wp-content/uploads/2016/04/ios-vs-android.jpg)", width: "15rem", height: "9.5rem"}}></div>
                        <div class="Gallery-image" style={{backgroundImage: "url(https://techcrunch.com/wp-content/uploads/2017/06/snap-acquires-zenly.png)", width: "15rem", height: "9.5rem"}}></div>
                    </div>
                    <div class="Gallery-image Gallery-image--primary" style={{backgroundImage: "url(https://lh3.googleusercontent.com/proxy/DnJQHlRI90EonvSDMctSJaN51YhxBL29_yopFIdj2F3MORIsSWm2mJOquFyIlITC0RRzvzgQuR05o0_CA5o96w6vNh0ky2h7_FDIELM_oBkdKA1SAHIf847QiOwFG8k)"}}></div>
                </div>
                    	<h1 class="projects_header">{t('project_activities')}</h1>
                    	<p class="projects_text" style={{whiteSpace: "pre-line"}}>{t('project8_results')}</p>
                    	<h1 class="projects_header">{t('project_tools')}</h1>
                  <div class="Gallery-images">
                      <div class="Gallery-image" style={{backgroundImage: "url(https://3.bp.blogspot.com/-U9fehH7pXsA/V6Bm0PeB63I/AAAAAAAAAB8/wfs4dkrBPSMGXvcqbojjPTakTuuhJ7JvACEw/s1600/AWS-Device-Farm.jpg)"}}></div>
                      <div class="Gallery-image" style={{backgroundImage: "url(https://img.over-blog-kiwi.com/1/19/40/37/20170505/ob_00db63_pyhon-programmation-informatique.png)"}}></div>
                      <div class="Gallery-image" style={{backgroundImage: "url(https://project-management.com/wp-content/uploads/2020/01/notion-logo.png)"}}></div>
                      <div class="Gallery-image" style={{backgroundImage: "url(https://campzone.nl/wp-content/uploads/2017/03/discord-logo.jpg)"}}></div>
                      <div class="Gallery-image" style={{backgroundImage: "url(https://www.programsbuzz.com/sites/default/files/inline-images/MobileDevTest_Blog-700x300%20%281%29.jpg)"}}></div>
                      <div class="Gallery-image" style={{backgroundImage: "url(https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/108859509/original/ddb7edfac989723e263404fedb528ab499674323/help-you-set-up-jira-and-confluence.png)"}}></div>
                  </div>
                  <div class="Gallery-images">
                      <div class="Gallery-image" style={{backgroundImage: "url(https://xebialabs.com/wp-content/uploads/xray.jpg)"}}></div>
                      <div class="Gallery-image" style={{backgroundImage: "url(https://xebialabs.com/wp-content/uploads/2018/10/buildkite.png)"}}></div>
                      <div class="Gallery-image" style={{backgroundImage: "url(https://miro.medium.com/max/960/0*gCoeYBAsHmiGrgKe.jpg)"}}></div>
                      <div class="Gallery-image" style={{backgroundImage: "url(https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Android_Studio_icon.svg/1200px-Android_Studio_icon.svg.png)"}}></div>
                      <div class="Gallery-image" style={{backgroundImage: "url()"}}></div>
                      <div class="Gallery-image" style={{backgroundImage: "url()"}}></div>
                  </div>
                <Button colored onClick={() => this.closeAll()} style={{marginLeft: "80%", marginTop: "3%", background: "orangered", fontWeight: "bold"}} raised ripple>{t('project_gallery_close')}</Button>
            </section>

        </div>
      )
  }
}

export default withNamespaces()(Projects);