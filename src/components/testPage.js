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

/*https://codepen.io/jasperlachance/pen/QNMwBg*/

  render() {

	const { t } = this.props;

    return(



<div class="testpage demo">
            <Helmet>
                <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/TweenLite.min.js"></script>
                <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/EasePack.min.js"></script>
                <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/499416/demo.js"></script>
            </Helmet>

               <AButton>TEST</AButton>


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



      <div id="large-header" class="large-header">
         <canvas id="demo-canvas"></canvas>

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
               </div>

    )
  }
}

export default withNamespaces()(Test);