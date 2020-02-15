import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import {Helmet} from "react-helmet";


class About extends Component {

	render() {

   	const { t } = this.props;


    return (
		<div>

		<link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"/>

        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>

        <h1 className="h1">Image Gallery Transition</h1>


        <div id="aboutPage">
            <div class="item red">
              <img src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190227192745/Skier.jpg"/>
              <i class="fa fa-camera"></i>
            </div>

            <div class="item gray">
              <img src="https://thegreyalley.com/wp-content/uploads/2018/06/Football-Turfs-Banner.jpg"/>
              <i class="fa fa-paw"></i>
            </div>

            <div class="item teal">
              <img src="https://cdn.images.express.co.uk/img/dynamic/59/590x/watch-tour-de-france-691467.jpg"/>
              <i class="fa fa-cloud"></i>
            </div>

            <div class="item red">
              <img src="https://hetwapenvanwesepe.nl/wp-content/uploads/2018/03/pubquiz-profielfoto-bresactiviteiten.nl_.jpg"/>
              <i class="fa fa-camera"></i>
            </div>

            <div class="item gray">
              <img src="https://redgrapevine.com.au/wp-content/uploads/sites/15/2018/11/australian-cuisines.png"/>
              <i class="fa fa-paw"></i>
            </div>

            <div class="item teal">
              <img src="https://www.wearencc.com/wp-content/uploads/2018/10/MindGames-518x294.jpg"/>
              <i class="fa fa-cloud"></i>
            </div>
        </div>

		</div>

    );

	}
}

export default withNamespaces()(About);