import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { withNamespaces } from 'react-i18next';
import cabbage from '../images/Cabbage_detail.png';

class Contact extends Component {
  render() {

    const { t } = this.props;

    return(
      <div className="background-containers contact-body">
        <Grid className="contact-grid">
            <img className="spaceCabbage" src={cabbage} alt=""/>
            <div class="stars"></div>
            <div class="twinkling"></div>
            <div class="clouds"></div>

          <Cell id="contact_block" col={6} style={{borderRadius: "15px", marginTop: "15%"}}>
            <h2 style={{ fontWeight: "bold", fontSize: "450%"}}>{t('contact_me_title')}</h2>
            <hr style={{borderTop:"5px dotted white", width: "66%"}}/>

            <div className="contact-list" >
              <List style={{marginLeft: "15%"}}>
                <ListItem>
                  <ListItemContent>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    {t('contact_phone')}
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    daan@koolit.nl
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent>
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