import React, { Component, link } from 'react';
import { Tabs, Tab, Grid, Cell,
Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton,
Dialog, DialogTitle, DialogContent, DialogActions, Icon  } from 'react-mdl';
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

<div id="container-gallery">
 <div id="rotating-gallery">
  <figure class="APItest" onClick={() => window.open("/api")}><img id="test_page_image" src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190227192745/Skier.jpg" style={{width: '100%', height: '100%'}}/></figure>
  <figure class="dropDown" onClick={() => window.open("/test/dropdown")}><img id="test_page_image" src="https://thegreyalley.com/wp-content/uploads/2018/06/Football-Turfs-Banner.jpg" style={{width: '100%', height: '100%'}}/></figure>
  <figure class="login" onClick={() => window.open("/test/login")}><img id="test_page_image" src="https://cdn.images.express.co.uk/img/dynamic/59/590x/watch-tour-de-france-691467.jpg" style={{width: '100%', height: '100%'}}/></figure>
  <figure class="testButtons" onClick={() => window.open("/test/buttons")}><img id="test_page_image" src="https://hetwapenvanwesepe.nl/wp-content/uploads/2018/03/pubquiz-profielfoto-bresactiviteiten.nl_.jpg" style={{width: '100%', height: '100%'}}/></figure>
  <figure class="textfields" onClick={() => window.open("/test/textfields")}><img id="test_page_image" src="https://redgrapevine.com.au/wp-content/uploads/sites/15/2018/11/australian-cuisines.png" style={{width: '100%', height: '100%'}}/></figure>
  <figure class="slider" onClick={() => window.open("/test/sliders")}><img id="test_page_image" src="https://www.wearencc.com/wp-content/uploads/2018/10/MindGames-518x294.jpg" style={{width: '100%', height: '100%'}}/></figure>
 </div>
</div>
    )
  }
}

export default withNamespaces()(Test);