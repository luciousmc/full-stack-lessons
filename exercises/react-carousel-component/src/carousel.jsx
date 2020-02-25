import React from 'react';

export default class Carousel extends React.Component {
  render() {
    return(
      <section className="carousel">
        <Slider images={ this.props.images } />
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
        <div className="slider-container">
          <div className="btn-previous-container" onClick={ this.handlePrevClick }>
            <div className="btn-previous"></div>
          </div>
          <figure className="image">
            <ImageList images={ this.props.images } currImg={ this.state.currImg } />
          </figure>
          <div className="btn-next-container" onClick={ this.handleNextClick }>
            <div className="btn-next"></div>
          </div>
        </div>
        <div className="dots-container">
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
