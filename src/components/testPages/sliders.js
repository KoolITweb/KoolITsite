import React, { Component, link } from 'react';
import { withNamespaces } from 'react-i18next';
import {Helmet} from "react-helmet";
import construction from '../../images/under_construction.png';


class TestSliders extends Component {

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

export default withNamespaces()(TestSliders);