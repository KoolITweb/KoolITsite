import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { withNamespaces } from 'react-i18next';


class Contact extends Component {
  render() {

    const { t } = this.props;

    return(
      <div className="background-containers contact-body">
        <Grid className="contact-grid">
            <img className="satellite" src="https://upload.wikimedia.org/wikipedia/commons/2/29/SAC-D_spacecraft_model.png" alt=""/>
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div class="clouds"></div>

          <Cell col={6} style={{zIndex: '4', background: "rgb(0,0,0)", borderRadius: "15px", color: "white", opacity:".8", position: "absolute", marginTop: "15%"}}>
            <h2 style={{ fontWeight: "bold", fontSize: "450%"}}>Contact Me</h2>
            <hr style={{borderTop:"5px dotted white", width: "66%"}}/>

            <div className="contact-list" >
              <List style={{marginLeft: "15%"}}>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: "white", fontWeight: "bold"}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    {t('contact_phone')}
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: "white", fontWeight: "bold"}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    daan@koolit.nl
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton', color: "white", fontWeight: "bold"}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    daan_koolman
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default withNamespaces()(Contact);