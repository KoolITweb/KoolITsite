import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import ski from '../../images/about_me/ski.jpg'
import football from '../../images/about_me/football.jpg'
import mindgames from '../../images/about_me/mind_games.jpg'
import food from '../../images/about_me/food.jpg'
import cycling from '../../images/about_me/cycling.jpg'
import pubquiz from '../../images/about_me/pub_quiz.jpg'


class About extends Component {

	render() {

   	const { t } = this.props;

    return (
		<div>
        <div id="aboutPage">
            <div class="item aboutme">
              <img src={ski}/>
              <i class="fa fa-forward"><p>{t('about_ski')}</p></i>
            </div>

            <div class="item aboutme">
              <img src={football}/>
              <i class="fa fa-users"><p>{t('about_football')}</p></i>
            </div>

            <div class="item aboutme">
              <img src={cycling}/>
              <i class="fa fa-bicycle"><p>{t('about_cycling')}</p></i>

            </div>

            <div class="item aboutme">
              <img src={pubquiz}/>
              <i class="fa fa-search"><p>{t('about_pubquiz')}</p></i>
            </div>

            <div class="item aboutme">
              <img src={food}/>
              <i class="fa fa-beer"><p>{t('about_drinks')}</p></i>
            </div>

            <div class="item aboutme">
              <img src={mindgames}/>
              <i class="fa fa-magic"><p>{t('about_mindgames')}</p></i>
            </div>
        </div>

		</div>

    );

	}
}

export default withNamespaces()(About);