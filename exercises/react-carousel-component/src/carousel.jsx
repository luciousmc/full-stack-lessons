import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgList: this.props.images,
      currentImg: 0
    }
    
  }
  render() {
    return(
      <figure className="img-container">
        <div className="arrow-previous"></div>
        <img src="images/pikachu.png" alt="PIkacu"/>
        <div className="arrow-next"></div>
      </figure>
    );
  }
}