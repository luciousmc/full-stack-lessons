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
      <div className="carousel">
        <div className="arrow-previous"></div>

        <figure className="img-container">
         <img src="images/pikachu.png" alt="PIkacu"/>
         <img src="images/squirtle.png" alt=""/>
        </figure>
        
        <div className="dots-container">
          <div className="dot-nav active"></div>
          <div className="dot-nav"></div>
          <div className="dot-nav"></div>
          <div className="dot-nav"></div>
        </div>
      </div>
    );
  }
}

export default Carousel;