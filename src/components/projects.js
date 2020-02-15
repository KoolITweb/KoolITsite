import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';

class Projects extends Component {


openGallery (id) {
  this.closeAll();
  var gallery = document.getElementById('gallery-' + id);
  var card = document.getElementById('card-' + id);
  gallery.classList.add('Gallery--active');
  card.classList.add('Card--active');
}

closeAll () {
  var galleryActv = document.querySelector('.Gallery--active');
  var cardActv = document.querySelector('.Card--active');

  if (galleryActv) {
    galleryActv.classList.remove('Gallery--active');
  }

  if (cardActv) {
    cardActv.classList.remove('Card--active');
  }
}

  render() {

  	  const { t } = this.props;

      return(
<div className="projects">
<section class="Grid">
    <div class="Grid-row">
        <a class="Card" onClick={() => this.openGallery(1)} id="card-1">
            <div class="Card-thumb">
                <div class="Card-shadow"></div>
                <div class="Card-shadow"></div>
                <div class="Card-shadow"></div>
                <div class="Card-image" style={{backgroundImage: "url(https://radar.avrotros.nl/fileadmin/user_upload/rabobank-reactie-23-09-2019.jpg)"}}></div>
            </div>
            <div class="Card-title"><span>Project details</span></div>
            <div class="Card-explore"><span> Project details and activities</span></div>
            <button class="Card-button">Click here</button></a>
        <a class="Card" onClick={() => this.openGallery(2)} id="card-2">
            <div class="Card-thumb">
                <div class="Card-shadow"></div>
                <div class="Card-shadow"></div>
                <div class="Card-shadow"></div>
                <div class="Card-image" style={{backgroundImage: "url(https://sollicitatieblog.nl/wp-content/uploads/2019/04/ahold-delhaize-logo.png)"}}></div>
            </div>
            <div class="Card-title"><span>Project details</span></div>
            <div class="Card-explore"><span> Project details and activities</span></div>
            <button class="Card-button">Click here</button></a>
        <a class="Card" onClick={() => this.openGallery(3)} id="card-3">
            <div class="Card-thumb">
                <div class="Card-shadow"></div>
                <div class="Card-shadow"></div>
                <div class="Card-shadow"></div>
                <div class="Card-image" style={{backgroundImage: "url(https://www.reybex.com/wp-content/uploads/2019/07/fedex_reybex_schnittstelle.gif)"}}></div>
            </div>
            <div class="Card-title"><span>Project details</span></div>
            <div class="Card-explore"><span>Project details and activities</span></div>
            <button class="Card-button">Click here</button></a>
    </div>
    <div class="Grid-row">
       <a class="Card" onClick={() => this.openGallery(4)} id="card-4">
            <div class="Card-thumb">
                <div class="Card-shadow"></div>
                <div class="Card-shadow"></div>
                <div class="Card-shadow"></div>
                <div class="Card-image" style={{backgroundImage: "url(https://sc02.alicdn.com/kf/UTB8Ae8LzCnEXKJk43Ubq6zLppXaQ/936445268/UTB8Ae8LzCnEXKJk43Ubq6zLppXaQ.jpg)"}}></div>
            </div>
            <div class="Card-title"><span>Project details</span></div>
            <div class="Card-explore"><span>Project details and activities</span></div><button class="Card-button">Click here</button></a>
       <a class="Card" onClick={() => this.openGallery(5)} id="card-5">
            <div class="Card-thumb">
                <div class="Card-shadow"></div>
                <div class="Card-shadow"></div>
                <div class="Card-shadow"></div>
                <div class="Card-image" style={{backgroundImage: "url(https://www.freshersopenings.in/wp-content/uploads/2016/11/Ranstad-logo.gif)"}}></div>
            </div>
            <div class="Card-title"><span>Project details</span></div>
            <div class="Card-explore"><span>Project details and activities</span></div><button class="Card-button">Click here</button></a>
       <a class="Card" onClick={() => this.openGallery(6)} id="card-6">
            <div class="Card-thumb">
                <div class="Card-shadow"></div>
                <div class="Card-shadow"></div>
                <div class="Card-shadow"></div>
                <div class="Card-image" style={{backgroundImage: "url(https://www.expertdoc.nl/wp-content/uploads/logo_DJI_MvVenJ-witruimte.jpg)"}}></div>
            </div>
            <div class="Card-title"><span>Project details</span></div>
            <div class="Card-explore"><span> Project details and activities</span></div><button class="Card-button">Click here</button></a>
    </div>
</section>
<section class="Gallery" id="gallery-1" onClick={() => this.closeAll()}>
    <div class="Gallery-header">
      <a class="Gallery-close" onClick={() => this.closeAll()}>×</a></div>
  <div><h1>Stream in Milan</h1></div>
    <div class="Gallery-images">
        <div class="Gallery-left">
            <div class="Gallery-image"><p>TEXT1</p></div>
            <div class="Gallery-image"><p>TEXT2</p></div>
        </div>
        <div class="Gallery-image Gallery-image--primary" style={{backgroundImage: "url(https://www.rabobank.nl/images/huis%20waarde%20rgb%20tr2_291051499.svg)"}}></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
</section>

<section class="Gallery" id="gallery-2">
    <div class="Gallery-header">
    <a class="Gallery-close" onClick={() => this.closeAll()}>×</a></div>
      <div><h1>Stream in Milan</h1></div>
    <div class="Gallery-images">
        <div class="Gallery-left">
            <div class="Gallery-image"></div>
            <div class="Gallery-image"></div>
        </div>
        <div class="Gallery-image Gallery-image--primary" style={{backgroundImage: "url(https://foodretaildesign.nl/wp-content/uploads/2016/11/plattegrond_AH_XL_Purmerend.jpg)"}}></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
</section>
<section class="Gallery" id="gallery-3">
    <div class="Gallery-header"><a class="Gallery-close" onClick={() => this.closeAll()}>×</a></div>
      <div><h1>Stream in Milan</h1></div>
    <div class="Gallery-images">
        <div class="Gallery-left">
            <div class="Gallery-image"></div>
            <div class="Gallery-image"></div>
        </div>
        <div class="Gallery-image Gallery-image--primary" style={{backgroundImage: "url(https://www.supplychain247.com/images/article/fedex_tnt_executives_provide_insights_wide_image.jpg)"}}></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
</section>
<section class="Gallery" id="gallery-4">
    <div class="Gallery-header"><a class="Gallery-close" onClick={() => this.closeAll()}>×</a></div>
      <div><h1>Stream in Milan</h1></div>
    <div class="Gallery-images">
        <div class="Gallery-left">
            <div class="Gallery-image"></div>
            <div class="Gallery-image"></div>
        </div>
        <div class="Gallery-image Gallery-image--primary" style={{backgroundImage: "url(https://www.blue-growth.org/Blue_Growth_Technology_Innovation/AmphiMax/Pictures_AmphiMax/TNT_Shipment_74096817_Track_Trace_Chris_Bury_Blackburn_Concrete_Vibrator.jpg)"}}></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
</section>
<section class="Gallery" id="gallery-5">
    <div class="Gallery-header"><a class="Gallery-close" onClick={() => this.closeAll()}>×</a></div>
      <div><h1>Stream in Milan</h1></div>
    <div class="Gallery-images">
        <div class="Gallery-left">
            <div class="Gallery-image"></div>
            <div class="Gallery-image"></div>
        </div>
        <div class="Gallery-image Gallery-image--primary" style={{backgroundImage: "url(https://lh3.googleusercontent.com/proxy/K_ha-sSG4rCHg9da8sJkazQnFMTYIDWfPJ0D94BrTzEl7EwIzNRBa0O6VqpsdC8rgu4xQKHPZU5eozcR5R90LYRAYlgE0LNgXW_DNRn5Q4lydYFNX7WPj_uog2tcvR2PPBFkZ6U6Kho)"}}></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
</section>
<section class="Gallery" id="gallery-6">
    <div class="Gallery-header"><a class="Gallery-close" onClick={() => this.closeAll()}>×</a></div>
      <div><h1>Stream in Milan</h1></div>
    <div class="Gallery-images">
        <div class="Gallery-left">
            <div class="Gallery-image"></div>
            <div class="Gallery-image"></div>
        </div>
        <div class="Gallery-image Gallery-image--primary" style={{backgroundImage: "url(https://nos.nl/data/image/2019/11/05/590326/2048x1152.jpg)"}}></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
    <div class="Gallery-images">
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
        <div class="Gallery-image"></div>
    </div>
</section>
        </div>
      )
  }
}

export default withNamespaces()(Projects);