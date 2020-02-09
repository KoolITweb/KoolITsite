import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';

class About extends Component {
	render() {

	    const { t } = this.props;

		return (

<div class="container">
  <div class="box">
    <img src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190227192745/Skier.jpg"/>
    <span>Skiing</span>
  </div>
  <div class="box">
    <img src="https://thegreyalley.com/wp-content/uploads/2018/06/Football-Turfs-Banner.jpg"/>
    <span>Football</span>
  </div>
  <div class="box">
    <img src="https://cdn.images.express.co.uk/img/dynamic/59/590x/watch-tour-de-france-691467.jpg"/>
    <span>Cycling</span>
  </div>
  <div class="box">
    <img src="https://hetwapenvanwesepe.nl/wp-content/uploads/2018/03/pubquiz-profielfoto-bresactiviteiten.nl_.jpg"/>
    <span>Pub quiz</span>
  </div>
    <div class="box">
      <img src="https://redgrapevine.com.au/wp-content/uploads/sites/15/2018/11/australian-cuisines.png"/>
      <span>Food</span>
    </div>
    <div class="box">
      <img src="https://www.wearencc.com/wp-content/uploads/2018/10/MindGames-518x294.jpg"/>
      <span>Mind games</span>
    </div>
</div>

		)
	}
}

export default withNamespaces()(About);