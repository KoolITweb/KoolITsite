import React, { Component, link } from 'react';
import { withNamespaces } from 'react-i18next';
import construction from '../../images/under_construction.png';
import { Slider } from 'react-mdl';

class TestSliders extends Component {

  render() {

	const { t } = this.props;

    return(
      <div class="test-slider">
 		<div>
 		     <Slider min={0} max={100} defaultValue={0}/>
             <img className="underConstruction" src={construction} style={{align:"center", marginLeft: "30%", marginTop: "5%"}} alt=""/>
        </div>

      </div>
    )
  }
}

export default withNamespaces()(TestSliders);