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
import construction from '../../images/under_construction.png';



class TestButtons extends Component {

  render() {

	const { t } = this.props;

    return(
      <div class="test-api">
 		<div>
             <img className="underConstruction" src={construction} style={{align:"center", marginLeft: "30%", marginTop: "5%"}} alt=""/>
        </div>

      </div>
    )
  }
}

export default withNamespaces()(TestButtons);