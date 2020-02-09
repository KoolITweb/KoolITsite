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

      <div id="testpage" className="test-page" style={{textAlign: 'center'}}>

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

          <Card shadow={0} style={{width: '256px', height: '256px', background: '#3E4EB8'}}>
              <CardTitle expand style={{alignItems: 'flex-start', color: '#fff'}}>
                  <h4 style={{marginTop: '0'}}>
                      Featured event:<br />
                      May 24, 2016<br />
                      7-11pm
                  </h4>
              </CardTitle>
              <CardActions border style={{borderColor: 'rgba(255, 255, 255, 0.2)', display: 'flex', boxSizing: 'border-box', alignItems: 'center', color: '#fff'}}>
                  <Button colored style={{color: '#fff'}}>Add to Calendar</Button>
                  <div className="mdl-layout-spacer"></div>
                  <Icon name="event" />
              </CardActions>
          </Card>




              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            	<AButton>TEST</AButton>



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

          <script src="js/libs/jsband-min.js"></script>
          <script src="js/Fluid-min.js"></script>

     </div>

    )
  }
}

export default withNamespaces()(Test);