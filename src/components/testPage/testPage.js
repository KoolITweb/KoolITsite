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
import button from '../../images/test/button.jpg';
import inputfield from '../../images/test/inputfields.png';
import login from '../../images/test/login.png';
import restapi from '../../images/test/REST-API.png';
import sliders from '../../images/test/sliders.png';
import dropdown from '../../images/test/dropdown.png';


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
            <div id="container-gallery">
            <div id="rotating-gallery">
                <figure class="APItest" onClick={() => window.open("/test/api")}><img id="test_page_image" src={restapi} style={{width: '100%', height: '100%'}}/></figure>
                <figure class="dropDown" onClick={() => window.open("/test/dropdown")}><img id="test_page_image" src={dropdown} style={{width: '100%', height: '100%'}}/></figure>
                <figure class="login" onClick={() => window.open("/test/login")}><img id="test_page_image" src={login} style={{width: '100%', height: '100%'}}/></figure>
                <figure class="testButtons" onClick={() => window.open("/test/buttons")}><img id="test_page_image" src={button} style={{width: '100%', height: '100%'}}/></figure>
                <figure class="textfields" onClick={() => window.open("/test/textfields")}><img id="test_page_image" src={inputfield} style={{width: '100%', height: '100%'}}/></figure>
                <figure class="slider" onClick={() => window.open("/test/sliders")}><img id="test_page_image" src={sliders} style={{width: '100%', height: '100%'}}/></figure>
            </div>
            </div>
        </div>
    )
  }
}

export default withNamespaces()(Test);