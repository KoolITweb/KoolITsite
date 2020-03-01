import React, { Component } from 'react';
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



<div class="test-page">
            <Helmet>
            <script src=""></script>
            </Helmet>
               <AButton>TEST</AButton>

<div id="container-gallery">
 <div id="rotating-gallery">
  <figure class="aboutmeFigure"><img id="test_page_image" src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190227192745/Skier.jpg" style={{width: '100%', height: '100%'}}/></figure>
  <figure class="aboutmeFigure"><img id="test_page_image" src="https://thegreyalley.com/wp-content/uploads/2018/06/Football-Turfs-Banner.jpg" style={{width: '100%', height: '100%'}}/></figure>
  <figure class="aboutmeFigure"><img id="test_page_image" src="https://cdn.images.express.co.uk/img/dynamic/59/590x/watch-tour-de-france-691467.jpg" style={{width: '100%', height: '100%'}}/></figure>
  <figure class="aboutmeFigure"><img id="test_page_image" src="https://hetwapenvanwesepe.nl/wp-content/uploads/2018/03/pubquiz-profielfoto-bresactiviteiten.nl_.jpg" style={{width: '100%', height: '100%'}}/></figure>
  <figure class="aboutmeFigure"><img id="test_page_image" src="https://redgrapevine.com.au/wp-content/uploads/sites/15/2018/11/australian-cuisines.png" style={{width: '100%', height: '100%'}}/></figure>
  <figure class="aboutmeFigure"><img id="test_page_image" src="https://www.wearencc.com/wp-content/uploads/2018/10/MindGames-518x294.jpg" style={{width: '100%', height: '100%'}}/></figure>
 </div>
</div>

                       <Button colored onClick={this.handleOpenDialog} raised ripple>Show Dialog</Button>
                       <Dialog open={this.state.openDialog}>
                         <DialogTitle>Allow data collection?</DialogTitle>
                         <DialogContent>
                           <p>Allowing us to collect data will let us get you the information you want faster.</p>
                         </DialogContent>
                         <DialogActions>
                           <Button type='button'>Agree</Button>
                           <Button type='button' onClick={this.handleCloseDialog}>Disagree</Button>
                         </DialogActions>
                       </Dialog>

                          <Accordion allowZeroExpanded='true'>
                              <AccordionItem title='button' style={{fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'}}>
                                  <AccordionItemHeading>
                                      <AccordionItemButton className="accordion__button">
                                          Project Details
                                      </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                      <p>
                                          Exercitation in fugiat est ut ad ea cupidatat ut in
                                          cupidatat occaecat ut occaecat consequat est minim minim
                                          esse tempor laborum consequat esse adipisicing eu
                                          reprehenderit enim.
                                      </p>
                                  </AccordionItemPanel>
                              </AccordionItem>
                              <AccordionItem>
                                  <AccordionItemHeading>
                                      <AccordionItemButton>
                                          Executed Tasks
                                      </AccordionItemButton>
                                  </AccordionItemHeading>
                                  <AccordionItemPanel>
                                      <p>
                                          Exercitation in fugiat est ut ad ea cupidatat ut in
                                          cupidatat occaecat ut occaecat consequat est minim minim
                                          esse tempor laborum consequat esse adipisicing eu
                                          reprehenderit enim.
                                      </p>
                                  </AccordionItemPanel>
                              </AccordionItem>
                          </Accordion>





          <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
              <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
              <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenan convallis.
              </CardText>
              <CardActions border>
                  <Button colored>View Updates</Button>
              </CardActions>
          </Card>



               </div>

    )
  }
}

export default withNamespaces()(Test);