import React from 'react';

export default class Carousel extends React.Component {
  render() {
    return(
      <section className="carousel">
        <div className="slider-container">
          <Slider images={ this.props.images } />
        </div>
      </section>
    )
  }
}

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currImg: 0
    }
    this.imgCount = this.props.images.length;
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }
  handlePrevClick() {
    if (this.state.currImg === 0) return;
    this.setState(state=> ({ currImg: state.currImg - 1 }));
  }
  handleNextClick() {
    if (this.state.currImg === this.imgCount - 1) return;
    this.setState(state=> ({ currImg: state.currImg + 1 }));
  }
  render() {
    return(
      <>
        <div>
          <div className="btn-previous" onClick={ this.handlePrevClick }></div>
          <figure className="image">
            {/* <img src={ this.props.images[this.state.currImg] } alt=""/> */}
            <ImageList images={ this.props.images } currImg={ this.state.currImg } />
          </figure>
          <div className="btn-next" onClick={ this.handleNextClick }></div>
        </div>
        <div className="dots">
          <Dots images={ this.props.images } currImg={ this.state.currImg } />
        </div>
      </>
    )
  }
}

class ImageList extends React.Component {
  render() {
    return this.props.images.map((image, index)=> {
      return(
        <img src={ image } alt={ `Slider Image ${index + 1}` } key={ index } />
      )
    })
  }
}

class Dots extends React.Component {
  render() {
    const currImg = this.props.currImg;

    return this.props.images.map((image, index)=> {
      return(
        <div className={ `dot ${ currImg === index ? 'active' : ' '}` } key={ index }></div>
      )
    })
  }
}
