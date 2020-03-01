import React, { Component, PropTypes } from 'react';
import { withNamespaces } from 'react-i18next';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import '../slider.css';
import profilePic from '../images/profile/Daan.jpg'

const images = importAll(require.context('../images/ppc', false, /\.(png|jpe?g)$/));

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}


class Ppc extends React.Component {

  render() {

  	  const { t } = this.props;

      return(

<div id="content-slider">
  <div class="wrap-slider">

    <h1 class="main-title">Product Practices Canvas</h1>


    <input type="radio" id="a-1" name="a" />
    <input type="radio" id="a-2" name="a" />
    <input type="radio" id="a-3" name="a" />
    <input type="radio" id="a-4" name="a" />
    <input type="radio" id="a-5" name="a" />
    <input type="radio" id="a-6" name="a" />
    <input type="radio" id="a-7" name="a" />
    <input type="radio" id="a-8" name="a" />

    <nav id="main">
      <label for="a-1" class="first"></label>
      <label for="a-2" class="first"></label>
      <label for="a-3" class="first"></label>
      <label for="a-4" class="first"></label>
      <label for="a-5" class="first"></label>
      <label for="a-6" class="first"></label>
      <label for="a-7" class="first"></label>
      <label for="a-8" class="first"></label>
    </nav>


    <nav id="control">
      <label for="a-1"></label>
      <label for="a-2"></label>
      <label for="a-3"></label>
      <label for="a-4"></label>
      <label for="a-5"></label>
      <label for="a-6"></label>
      <label for="a-7"></label>
      <label for="a-8"></label>
    </nav>



    <span id="b-1" class="th" tabindex="10">
      <img src={images['qualityPyramid.png']} alt="" id="p-1"/>
      <div class="title-1">
            <h1>Qualit Pyramid</h1>
            <p>Plot all current activities against the pyramid</p>
            <a href="">read more...</a>
      </div>
    </span>

    <span id="b-2" class="th" tabindex="11">
      <img src={images['ppcModel.png']} alt="" id="p-2"/>
      <div class="title-2">
            <h1>Product Practices Canvas</h1>
            <p>Move the activities to the canvas</p>
            <a href="">read more...</a>
      </div>
    </span>

    <span id="b-3" class="th" tabindex="12">
      <img src={images['imagine.png']} alt="" id="p-3"/>
      <div class="title-3">
            <h1>Imagine It</h1>
            <p>Plot all relevant activities to Imagine It</p>
            <a href="">read more...</a>
      </div>
    </span>

    <span id="b-4" class="th" tabindex="13">
      <img src={images['build.png']} alt="" id="p-4"/>
      <div class="title-4">
            <h1>Build It</h1>
            <p>Plot all relevant activities to Build It</p>
            <a href="">read more...</a>
      </div>
    </span>

    <span id="b-5" class="th" tabindex="14">
      <img src={images['run.png']} alt="" id="p-5"/>
      <div class="title-5">
            <h1>Run It</h1>
            <p>Plot all relevant activities to Run It</p>
            <a href="">read more...</a>
      </div>
    </span>

    <span id="b-6" class="th" tabindex="15">
      <img src={images['improve.png']} alt="" id="p-6"/>
      <div class="title-6">
            <h1>(Im)Prove It</h1>
            <p>Plot all relevant activities to (Im)Prove It</p>
            <a href="">read more...</a>
      </div>
    </span>

    <span id="b-7" class="th" tabindex="16">
      <img src={images['process.png']} alt="" id="p-7"/>
      <div class="title-7">
            <h1>Process</h1>
            <p>Plot all relevant activities belonging to the process</p>
            <a href="">read more...</a>
      </div>
    </span>

    <span id="b-8" class="th" tabindex="17">
      <img src={images['practiceResult.jpg']} alt="" id="p-8"/>
      <div class="title-8">
            <h1>Result</h1>
            <p>Result of a fully plotted canvas</p>
            <a href="">read more...</a>
      </div>
    </span>

    <div class="slider">
      <div class="inset">

        <figure>
          <figcaption class="title-1">
            <h1>Qualit Pyramid</h1>
            <p>Plot all current activities against the pyramid</p>
            <a href="">read more...</a>
          </figcaption>
          <img src={images['qualityPyramid.png']} alt="" id="i-1" class="f"/>
        </figure>

        <figure>
          <figcaption class="title-2">
            <h1>Product Practices Canvas</h1>
            <p>Move the activities to the canvas</p>
            <a href="">read more...</a>
          </figcaption>
          <img src={images['ppcModel.png']} alt="" id="i-2" class="f"/>
        </figure>

        <figure>
          <figcaption class="title-3">
            <h1>Imagine It</h1>
            <p>Plot all relevant activities to Imagine It</p>
            <a href="">read more...</a>
          </figcaption>
          <img src={images['imagine.png']} alt="" id="i-3" class="f"/>
        </figure>

        <figure>
          <figcaption class="title-4">
            <h1>Build It</h1>
            <p>Plot all relevant activities to Build It</p>
            <a href="">read more...</a>
          </figcaption>
          <img src={images['build.png']} alt="" id="i-4" class="f"/>
        </figure>

        <figure>
          <figcaption class="title-5">
            <h1>Run It</h1>
            <p>Plot all relevant activities to Run It</p>
            <a href="">read more...</a>
          </figcaption>
          <img src={images['run.png']} alt="" id="i-5" class="f"/>
        </figure>

        <figure>
          <figcaption class="title-6">
            <h1>(Im)Prove It</h1>
            <p>Plot all relevant activities to (Im)Prove It</p>
            <a href="">read more...</a>
          </figcaption>
          <img src={images['improve.png']} alt="" id="i-6" class="f"/>
        </figure>

        <figure>
          <figcaption class="title-7">
            <h1>Process</h1>
            <p>Plot all relevant activities belonging to the process</p>
            <a href="">read more...</a>
          </figcaption>
          <img src={images['process.png']} alt="" id="i-7" class="f"/>
        </figure>

        <figure>
          <figcaption class="title-8">
            <h1>Result</h1>
            <p>Result of a fully plotted canvas</p>
            <a href="">read more...</a>
          </figcaption>
          <img src={images['practiceResult.png']} alt="" id="i-8" class="f"/>
        </figure>

      </div>
    </div>

  </div>
</div>

)
}
}

export default withNamespaces()(Ppc);