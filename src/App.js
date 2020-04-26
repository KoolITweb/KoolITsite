import  React, { useEffect } from 'react';
import './App.css';
import {Header, Navigation, Drawer, Layout, Content, RadioGroup, Radio} from 'react-mdl';
import Main from './components/main'
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import i18n from './i18n';
import ReactGA from 'react-ga';

  function initGA(){
     ReactGA.initialize('UA-164628388-1')
     ReactGA.pageview(window.location.pathname  + window.location.search)
  }

  function App({ t }) {

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng)
      ReactGA.event({
        category: 'KoolIT site click',
        action: 'Change language',
        label: lng
      })
    }

    initGA();

      return (
            <div className="KoolIT_web">
                <Layout>
            			<Header className='header-color' style={{ backgroundColor: "rgba(249, 170, 11, 0.10)", boxShadow: "3px 3px 3px 3px rgba(249, 170, 11, 0.25)"}} title={<a href ="/"><img className="koolit-menubar-logo" style={{ width: '20%', borderRadius: '7px' }} src="https://media-exp1.licdn.com/dms/image/C4D0BAQH4NGVYVG0akQ/company-logo_200_200/0?e=1589414400&v=beta&t=mK76ItIW0qGGkvpBd0qUmPiMweJ7fvmEslvOlORUCBY"/></a>} scroll>
                        <Navigation className="navigation-menus">
                            <Link to="/">{t('menu_home')}</Link>
                            <Link to="/aboutme">{t('menu_about_me')}</Link>
                            <Link to="/resume">{t('menu_resume')}</Link>
                            <Link to="/projects">{t('menu_projects')}</Link>
                            <Link to="/ppc">PPC</Link>
                            <Link to="/test-page">{t('menu_test')}</Link>
                            <Link to="/contact">{t('menu_contact')}</Link>
                            <button className="translate_option" onClick={() => changeLanguage('nl')} style={{ backgroundColor: "black", borderColor: "transparent", borderRadius: "50%", fontSize: "135%", marginLeft: "100px" }}>NL</button>
                            <button className="translate_option" onClick={() => changeLanguage('en')} style={{ backgroundColor: "black", borderColor: "transparent", borderRadius: "50%", fontSize: "135%" }}>EN</button>
                        </Navigation>
                    </Header>
                    <Drawer title={<a href ="/"><img className="koolit-hamburgermenu-logo-" style={{ width: '20%' }} src="https://media-exp1.licdn.com/dms/image/C4E0BAQFsibUjgR5ToQ/company-logo_200_200/0?e=1588809600&v=beta&t=4G0hQOA5pnPOWTT5Xv6FvZQyZIU6UufbnZwZkQ2ynl4"/></a>}>
                        <Navigation>
                            <Link to="/">{t('menu_home')}</Link>
                            <Link to="/aboutme">{t('menu_about_me')}</Link>
                            <Link to="/resume">{t('menu_resume')}</Link>
                            <Link to="/projects">{t('menu_projects')}</Link>
                            <Link to="/ppc">PPC</Link>
                            <Link to="/test-page">{t('menu_test')}</Link>
                            <Link to="/contact">{t('menu_contact')}</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" style={{marginTop: "2%"}}/>
                        <Main/>
                    </Content>
                </Layout>

            </div>
      );
}

export default withNamespaces()(App);
