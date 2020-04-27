import React, { Component, link } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { withNamespaces } from 'react-i18next';
import construction from '../../images/under_construction.png';


class TestLogin extends Component {

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

export default withNamespaces()(TestLogin);