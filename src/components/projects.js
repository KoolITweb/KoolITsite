import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton,Dialog, DialogTitle, DialogContent, DialogActions } from 'react-mdl';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import { withNamespaces } from 'react-i18next';


class Projects extends Component {
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
        <div className="projects-grid">
          {/* Project 1 */}
          <Card className="projects-card" shadow={5} style={{ width: '80%', margin: '10% 10%'}}>
            <CardTitle style={{ height: '150px', background: 'url(https://radar.avrotros.nl/fileadmin/user_upload/rabobank-reactie-23-09-2019.jpg) center / 100%'}} ></CardTitle>

            <CardActions border>
        <Accordion allowZeroExpanded='true'>
            <AccordionItem title='button' style={{fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'}}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Project Details
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
            		  {t('project1_desc')}
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
            		  {t('project1_results')}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card className="projects-card" shadow={5} style={{ width: '80%', margin: '10% 10%'}}>
            <CardTitle style={{ height: '150px', background: 'url(https://sollicitatieblog.nl/wp-content/uploads/2019/04/ahold-delhaize-logo.png) center / 100%'}} ></CardTitle>

            <CardActions border>
        <Accordion allowZeroExpanded='true'>
            <AccordionItem title='button' style={{fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'}}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Project Details
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
            		  {t('project2_desc')}
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
            		  {t('project2_results')}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          {/* Project 3 */}
          <Card className="projects-card" shadow={5}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.reybex.com/wp-content/uploads/2019/07/fedex_reybex_schnittstelle.gif) center / cover'}} >React Project #3</CardTitle>

            <CardActions border>
              <Button colored onClick={this.handleOpenDialog}>Project</Button>

                      <Dialog open={this.state.openDialog}>
                        <DialogTitle>TEST</DialogTitle>
                        <DialogContent>
                          <p>TO BE FILLED IN</p>
                        </DialogContent>
                        <DialogActions>
                          <Button type='button' onClick={this.handleCloseDialog}>Ok</Button>
                        </DialogActions>
                      </Dialog>

              <Button colored onClick={this.handleOpenDialog}>Tasks</Button>
                      <Dialog open={this.state.openDialog}>
                        <DialogTitle>Activities and Results</DialogTitle>
                        <DialogContent>
                          <p>Allowing us to collect data will let us get you the information you want faster.</p>
                        </DialogContent>
                        <DialogActions>
                          <Button type='button' onClick={this.handleCloseDialog}>Ok</Button>
                        </DialogActions>
                      </Dialog>

            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>


          {/* Project 4 */}
          <Card className="projects-card" shadow={5} style={{ width: '80%', margin: '10% 10%'}}>
            <CardTitle style={{ height: '150px', background: 'url(https://sc02.alicdn.com/kf/UTB8Ae8LzCnEXKJk43Ubq6zLppXaQ/936445268/UTB8Ae8LzCnEXKJk43Ubq6zLppXaQ.jpg) center / 100%'}} ></CardTitle>

            <CardActions border>
        <Accordion allowZeroExpanded='true'>
            <AccordionItem title='button' style={{fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'}}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Project Details
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
            		  {t('project4_desc')}
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
            		  {t('project4_results')}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 5 */}
          <Card className="projects-card" shadow={5} style={{ width: '80%', margin: '10% 10%'}}>
            <CardTitle style={{ height: '150px', background: 'url(https://www.freshersopenings.in/wp-content/uploads/2016/11/Ranstad-logo.gif) center / 100%'}} ></CardTitle>

            <CardActions border>
        <Accordion allowZeroExpanded='true'>
            <AccordionItem title='button' style={{fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'}}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Project Details
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
            		  {t('project5_desc')}
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
            		  {t('project5_results')}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 6 */}
          <Card className="projects-card" shadow={5} style={{ width: '80%', margin: '10% 10%'}}>
            <CardTitle style={{ height: '150px', background: 'url(https://www.expertdoc.nl/wp-content/uploads/logo_DJI_MvVenJ-witruimte.jpg) center / 100%'}} ></CardTitle>

            <CardActions border>
        <Accordion allowZeroExpanded='true'>
            <AccordionItem title='button' style={{fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'}}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        Project Details
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
            		  {t('project6_desc')}
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
            		  {t('project6_results')}
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>
      )
  }
}

export default withNamespaces()(Projects);