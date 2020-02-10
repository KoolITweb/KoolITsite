import React from 'react';
import './App.css';
import {Header, Navigation, Drawer, Layout, Content} from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import i18n from './i18n';

function App({ t }) {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }

  return (
<div className="KoolIT_web">
    <Layout>
			<Header className='header-color' title={<a href ="/"><img className="koolit-menubar-logo" style={{ width: '20%', borderRadius: '7px' }} src="https://media-exp1.licdn.com/dms/image/C4D0BAQH4NGVYVG0akQ/company-logo_200_200/0?e=1589414400&v=beta&t=mK76ItIW0qGGkvpBd0qUmPiMweJ7fvmEslvOlORUCBY"/></a>} scroll>
            <Navigation className="navigation-menus">
                <Link to="/resume">{t('menu_resume')}</Link>
                <Link to="/aboutme">{t('menu_about_me')}</Link>
                <Link to="/projects">{t('menu_projects')}</Link>
                <Link to="/contact">{t('menu_contact')}</Link>
                <Link to="/test-page">{t('menu_test')}</Link>
                <button onClick={() => changeLanguage('nl')}>nl</button>
                <button onClick={() => changeLanguage('en')}>en</button>
            </Navigation>
        </Header>
        <Drawer title={<a href ="/"><img className="koolit-hamburgermenu-logo-" style={{ width: '20%' }} src="https://media-exp1.licdn.com/dms/image/C4E0BAQFsibUjgR5ToQ/company-logo_200_200/0?e=1588809600&v=beta&t=4G0hQOA5pnPOWTT5Xv6FvZQyZIU6UufbnZwZkQ2ynl4"/></a>}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/test-page">Test-page</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>

</div>
  );
}

export default withNamespaces()(App);
