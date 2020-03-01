import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';

class About extends Component {

	render() {

   	const { t } = this.props;

    return (
		<div>

        <div id="aboutPage">
            <div class="item aboutme">
              <img src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20190227192745/Skier.jpg"/>
              <i class="fa fa-forward"><p>{t('about_ski')}</p></i>
            </div>

            <div class="item aboutme">
              <img src="https://thegreyalley.com/wp-content/uploads/2018/06/Football-Turfs-Banner.jpg"/>
              <i class="fa fa-users"><p>{t('about_football')}</p></i>
            </div>

            <div class="item aboutme">
              <img src="https://cdn.images.express.co.uk/img/dynamic/59/590x/watch-tour-de-france-691467.jpg"/>
              <i class="fa fa-bicycle"><p>{t('about_cycling')}</p></i>

            </div>

            <div class="item aboutme">
              <img src="https://www.gasterijsmits.nl/wp-content/uploads/activiteiten-gasterij-smits-pubquiz.jpg"/>
              <i class="fa fa-search"><p>{t('about_pubquiz')}</p></i>
            </div>

            <div class="item aboutme">
              <img src="https://redgrapevine.com.au/wp-content/uploads/sites/15/2018/11/australian-cuisines.png"/>
              <i class="fa fa-beer"><p>{t('about_drinks')}</p></i>
            </div>

            <div class="item aboutme">
              <img src="https://www.wearencc.com/wp-content/uploads/2018/10/MindGames-518x294.jpg"/>
              <i class="fa fa-magic"><p>{t('about_mindgames')}</p></i>
            </div>
        </div>

		</div>

    );

	}
}

export default withNamespaces()(About);