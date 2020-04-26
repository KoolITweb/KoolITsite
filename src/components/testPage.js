import React, { Component } from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import { AwesomeButton } from 'react-awesome-button';
import { withNamespaces } from 'react-i18next';
import {Helmet} from "react-helmet";


function AButton() {
  return <AwesomeButton type="primary">Button</AwesomeButton>;
}

class Test extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }


  render() {

	const { t } = this.props;

    return(
        <div>
            <div class="twinkling"></div>
            <div id="container-gallery">
            <div id="rotating-gallery">
                <figure class="APItest" onClick={() => window.open("/api")}><img id="test_page_image" src="https://www.eaglecmms.com/wp-content/uploads/2019/10/REST-API.png" style={{width: '100%', height: '100%'}}/></figure>
                <figure class="dropDown" onClick={() => window.open("/test/dropdown")}><img id="test_page_image" src="https://www.abeautifulsite.net/uploads/2017/10/bs4-dropdown-tips.png" style={{width: '100%', height: '100%'}}/></figure>
                <figure class="login" onClick={() => window.open("/test/login")}><img id="test_page_image" src="https://www.pngitem.com/pimgs/m/273-2738719_user-login-icon-png-transparent-background-login-icon.png" style={{width: '100%', height: '100%'}}/></figure>
                <figure class="testButtons" onClick={() => window.open("/test/buttons")}><img id="test_page_image" src="https://tailwindcomponents.com/storage/873/conversions/temp86384-thumb.jpg" style={{width: '100%', height: '100%'}}/></figure>
                <figure class="textfields" onClick={() => window.open("/test/textfields")}><img id="test_page_image" src="https://i.stack.imgur.com/egOpy.png" style={{width: '100%', height: '100%'}}/></figure>
                <figure class="slider" onClick={() => window.open("/test/sliders")}><img id="test_page_image" src="https://i.stack.imgur.com/xp0cX.png" style={{width: '100%', height: '100%'}}/></figure>
            </div>
            </div>
        </div>
    )
  }
}

export default withNamespaces()(Test);