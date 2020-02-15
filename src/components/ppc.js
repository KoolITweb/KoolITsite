import React, { Component } from 'react';
import { withNamespaces } from 'react-i18next';
import DragScrollProvider from 'drag-scroll-provider'

/*
const slider = document.querySelector('.items');

let isDown = false;  // click hold status
let startX;  // starting mouse position
let scrollLeft;  // initial position of the slider

slider.addEventListener('mousedown', enableScroll);
slider.addEventListener('mousemove', handleScroll);
slider.addEventListener('mouseup', cancelScroll);
slider.addEventListener('mouseleave', cancelScroll);

function enableScroll(e) {
  isDown = true;

  startX = e.pageX - slider.offsetLeft;  // consider space between the element and the page
  scrollLeft = slider.scrollLeft;

  e.preventDefault();  // prevent selection
}

function handleScroll(e) {
  if (!isDown) return;  // trigger only on click & drag

  const x = e.pageX - slider.offsetLeft; // get current mouse position
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
}

function cancelScroll() {
  isDown = false;
}
*/

class Ppc extends Component {
  constructor(props) {
    super(props);

    this.state = {  };
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
}


  render() {

	const { t } = this.props;

    return(
		<div class="ppc-page">
		<img class="logo" src="https://i.postimg.cc/SxnZwThV/origami-bird.png" alt=""/>
        <h1 class="title">Click and drag to scroll</h1>

<DragScrollProvider>
    {({ onMouseDown, ref }) => (
        <div class="items" ref={ref} onMouseDown={onMouseDown}>
          <img class="item" src="https://source.unsplash.com/random/400x400/?technology"/>
          <img class="item" src="https://source.unsplash.com/random/400x400/?people"/>
          <img class="item" src="https://source.unsplash.com/random/400x400/?nature"/>
          <img class="item" src="https://source.unsplash.com/random/400x400/?city"/>
          <img class="item" src="https://source.unsplash.com/random/400x400/?beach"/>
          <img class="item" src="https://source.unsplash.com/random/400x400/?computer"/>
          <img class="item" src="https://source.unsplash.com/random/400x400/?music"/>
          <img class="item" src="https://source.unsplash.com/random/400x400/?girl"/>
          <img class="item" src="https://source.unsplash.com/random/400x400/?cinema"/>
          <img class="item" src="https://source.unsplash.com/random/400x400/?city"/>
          <img class="item" src="https://source.unsplash.com/random/400x400/?coding"/>
          <img class="item" src="https://source.unsplash.com/random/400x400/?summer"/>
          <img class="item" src="https://source.unsplash.com/random/400x400/?winter"/>
          <img class="item" src="https://source.unsplash.com/random/400x400/?animal"/>
          <img class="item" src="https://source.unsplash.com/random/400x400/?headphones"/>
        </div>
        )}
        </DragScrollProvider>
		</div>
    )
  }
}

export default withNamespaces()(Ppc);