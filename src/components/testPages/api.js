import React, { Component } from 'react';
import { AwesomeButton } from 'react-awesome-button';
import { withNamespaces } from 'react-i18next';
import construction from '../../images/under_construction.png';


function AButton() {
  return <AwesomeButton type="primary">Button</AwesomeButton>;
}

class TestApi extends Component {

  render() {

	const { t } = this.props;

    return(
      <div class="test-page">

        <AButton>TEST</AButton>

 		<div>
             <img className="underConstruction" src={construction}/>
             <AButton>BACK TO HOMEPAGE</AButton>
        </div>

      </div>
    )
  }
}

export default withNamespaces()(TestApi);