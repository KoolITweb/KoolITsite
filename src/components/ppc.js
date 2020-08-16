import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import '../slider.css';
import importAll from '../importAll';


const images = importAll(require.context('../images/ppc', false, /\.(png|jpe?g)$/));


const imageDescription = [
    "sheet1_explanation",
    "sheet2_explanation",
    "sheet3_explanation",
    "sheet4_explanation",
    "sheet5_explanation",
    "sheet6_explanation",
    "sheet7_explanation",
    "sheet8_explanation",
    "sheet9_explanation",
    "sheet10_explanation",
    "sheet11_explanation"
]

const imageText = [
    "sheet1",
    "sheet2",
    "sheet3",
    "sheet4",
    "sheet5",
    "sheet6",
    "sheet7",
    "sheet8",
    "sheet9",
    "sheet10",
    "sheet11"
]

const ImageURL = [
  images['write_current_acitivities.png'],
  images['qualityPyramid.png'],
  images['ppcModel.png'],
  images['imagine.png'],
  images['build.png'],
  images['run.png'],
  images['improve.png'],
  images['process.png'],
  images['practiceResult.jpg'],
  images['contact_for_info_ppc.png'],
  images['logo.png']
]


class Ppc extends Component {
  constructor(props) {
    super(props);
    this.state = ({ currentIndex : 0 , slideshow : false , fullscreen : false})
    this.prevHandler=this.prevHandler.bind(this);
    this.nextHandler=this.nextHandler.bind(this);
    this.dotHandler=this.dotHandler.bind(this);
    this.slideshowHandler=this.slideshowHandler.bind(this);
    this.exitfullScreen=this.exitfullScreen.bind(this);
    this.enterfullScreen=this.enterfullScreen.bind(this);
    this.slideTransition=this.slideTransition.bind(this);
    this.updateImage=this.updateImage.bind(this);
    this.left = 0;
    //this.myImage = React.createRef();
  }
  slideTransition = (slider) => {
    if(this.state.currentIndex === 10) {
      this.left=0;
      slider.style.left = this.left+'px';
    }
    else {
      //this.left= this.left-60;
      console.log(this.left);
      slider.style.left = this.left+'px';
    }
  }

  componentDidMount() {

    setInterval(()=> {

      if(this.state.slideshow===true){

        var slider = document.getElementById("slider-img-container");
        var index = (this.state.currentIndex === 10 ) ? 0 : this.state.currentIndex+1;

        this.slideTransition(slider);

        this.setState((prevState)=>({currentIndex : prevState.currentIndex===10 ? 0 : prevState.currentIndex+1}))

      }

    },2000);

  }


slideshowHandler = (event) => {

  this.setState((prevState) => ({slideshow : prevState.slideshow===false ? true : false}))

}

exitfullScreen = (event) => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  var i = document.getElementsByClassName("gallery-img-container ")[0];
  i.getElementsByClassName("gallery-img")[0].style.height='300px';
  i.getElementsByClassName("gallery-img")[0].style.width='100%';
  this.setState((prevState) => ({fullscreen : prevState.fullscreen===false ? true : false}))
}

enterfullScreen = (event) => {
  var i = document.getElementsByClassName("gallery-img-container ")[0];
  console.log('fullscreen' + this.state.fullscreen + i);

  if (i.requestFullscreen) {
    i.requestFullscreen();
  } else if (i.mozRequestFullScreen) {
    i.mozRequestFullScreen();
  } else if (i.webkitRequestFullscreen) {
    i.webkitRequestFullscreen();
  }

  i.getElementsByClassName("gallery-img")[0].style.height='100%';
  i.getElementsByClassName("gallery-img")[0].style.width='100%';

  this.setState((prevState) => ({fullscreen : prevState.fullscreen===false ? true : false}))
}

dotHandler = (event) => {
  var imgIndex = event.target.id;

  var slider = document.getElementById("slider-img-container");
  //this.left = (parseInt(imgIndex))*-60;
  slider.style.left = this.left+'px';

  this.setState({currentIndex : parseInt(imgIndex)})

}

updateImage = (event ) => {
  var imgIndex = event.target.id;

  var slider = document.getElementById("slider-img-container");
  //this.left = parseInt(imgIndex)*-60;
  slider.style.left = this.left+'px';

  this.setState({currentIndex : parseInt(imgIndex) })
}

prevHandler =(event) => {
  var slider = document.getElementById("slider-img-container");
  var index = (this.state.currentIndex === 0 ) ? 10 : this.state.currentIndex-1;

  this.slideTransition(slider);

  this.setState((prevState)=>({currentIndex : prevState.currentIndex===0 ? 10 : prevState.currentIndex-1}))
}

nextHandler =(event) => {
  var slider = document.getElementById("slider-img-container");
  var index = (this.state.currentIndex === 10 ) ? 0 : this.state.currentIndex+1;

  this.slideTransition(slider);

  this.setState((prevState)=>({currentIndex : prevState.currentIndex===10 ? 0 : prevState.currentIndex+1}))
}

render() {

  const { t } = this.props;

  var i = this.state.currentIndex;
  console.log(i);
  var dotNumbers = Array.from(Array(ImageURL.length).keys());
  const carouselDots = dotNumbers.map((n,index)=><div className={['carousel-dot', index === this.state.currentIndex ? 'active' : ''].join(' ')} key={n} id={n} onClick={this.dotHandler} >&#9679;</div>)
  const ImgItem =
  <div className="gallery-img-container">
    <img className="gallery-img" src={ImageURL[i]}/>
    <h2>
    <span>{t('ppc_'+imageText[i])}</span>
    <p>{t('ppc_'+imageDescription[i])}</p></h2>
    <div className= "prev-carousel-button" onClick={this.prevHandler} style={{fontSize: "40px", fontFamily: "Helvetica, Arial, sans-serif"}}>&#9664;</div>
    <div id="carousel-dot-container">{carouselDots}</div>
    <div className= "next-carousel-button" onClick={this.nextHandler} style={{fontSize: "40px", fontFamily: "Helvetica, Arial, sans-serif"}}>&#9654;</div>
    { this.state.slideshow===false ? <button className="slideshow-button" onClick={this.slideshowHandler}>{t('ppc_play')} &#9654;</button> : <button className="slideshow-button" onClick={this.slideshowHandler}>&#9646;&#9646;</button> }
    { this.state.fullscreen===false ? <button className="fullscreen-button" onClick={this.enterfullScreen}>{t('ppc_full_screen')} &#9635;</button> : <button className="fullscreen-button" onClick={this.exitfullScreen}>&#9635;</button> }

     </div>

     var imgId=0;
     const sliderImages = ImageURL.slice(0,10).map ((n,index)=><img className={['slider-img', index === this.state.currentIndex ? 'active' : ''].join(' ')} src={n} key={n} id={imgId++} onClick={this.updateImage}/>)

     return (
         <div className="ppcPage">
            <div className="ppcHeader">
            <h1 style={{fontWeight: "bold"}}>Product Practices Canvas</h1>
            <p style={{fontWeight: "bold", fontSize: "16.10px"}}>{t('ppc_intro')}</p>
                </div>
                <div id="gallery-container" ref={this.myImage}>
                    {ImgItem}
                    <div id="slider-img-container" ref={this.mySlider}>{sliderImages}</div>
                </div>
             </div>
     )
  }
}


export default withNamespaces()(Ppc);