import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { AwesomeButton } from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

function AButton() {
  return <AwesomeButton type="primary">Button</AwesomeButton>;
}


class Test extends Component {
  render() {
    return(
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            	<AButton>TEST</AButton>
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        AccordingButton
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
					Test the TESTPAGE
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
            </div>
            )
  }
}

export default Test;