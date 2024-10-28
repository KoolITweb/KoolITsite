import React, { Component, link } from 'react';
import { Button, Dialog, DialogContent, DialogActions, DialogTitle, Radio, RadioGroup, Snackbar, Switch } from 'react-mdl';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import { AwesomeButton, AwesomeButtonProgress } from 'react-awesome-button';
import { withNamespaces } from 'react-i18next';
import construction from '../../images/under_construction.png';
import 'react-awesome-button/dist/themes/theme-blue.css';


class TestButtons extends Component {

  constructor(props) {
    super(props);
    this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
    this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
    this.handleClickActionSnackbar = this.handleClickActionSnackbar.bind(this);
    this.state = { isSnackbarActive: false };
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

  handleShowSnackbar() {
    this.setState({
      isSnackbarActive: true,
      btnBgColor: '#' +
        Math.floor(Math.random() * 0xFFFFFF).toString(16)
    });
  }
  handleTimeoutSnackbar() {
    this.setState({ isSnackbarActive: false });
  }
  handleClickActionSnackbar() {
    this.setState({
      btnBgColor: ''
    });
  }

  render() {

	const { t } = this.props;
    const { btnBgColor, isSnackbarActive } = this.state;


    return(
      <div class="test-api">
        <div>
          <Button colored onClick={this.handleOpenDialog} raised ripple>Show Dialog</Button>
          <Dialog open={this.state.openDialog} onCancel={this.handleCloseDialog}>
            <DialogTitle>Allow data collection?</DialogTitle>
            <DialogContent>
              <p>Allowing us to collect data will let us get you the information you want faster.</p>
            </DialogContent>
            <DialogActions>
              <Button type='button'>Agree</Button>
              <Button type='button' onClick={this.handleCloseDialog}>Disagree</Button>
            </DialogActions>
          </Dialog>
        </div>
 		<div>
            <h1>Buttons to appear or disappear</h1>
            <AwesomeButton size="small" type="primary">Appear</AwesomeButton>
            <p>The text SHOWS up</p>
        </div>
 		<div>
            <h1>Radio Buttons to double</h1>
            <RadioGroup name="demo" value="opt1">
                <Radio value="opt1" ripple>Ripple option</Radio>
                <Radio value="opt2">Other option</Radio>
            </RadioGroup>
        </div>
 		<div>
            <h1>Buttons to change color</h1>
            <Button type="primary" raised style={{backgroundColor: btnBgColor}} onClick={this.handleShowSnackbar}>Changes button color</Button>
            <Snackbar
              active={isSnackbarActive}
              onClick={this.handleClickActionSnackbar}
              onTimeout={this.handleTimeoutSnackbar}
              action="Undo">Button color changed.</Snackbar>
        </div>
 		<div>
            <h1>Button to launch rocket</h1>
            <AwesomeButtonProgress type="secondary">Launch</AwesomeButtonProgress>
            <img/>
        </div>
        <div>
            <Switch ripple id="switch1" defaultChecked>Ripple switch</Switch>
        </div>
      </div>
    )
  }
}

export default withNamespaces()(TestButtons);