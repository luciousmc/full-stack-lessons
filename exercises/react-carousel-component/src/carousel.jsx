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
    this.timerID = null;
    this.imgCount = this.props.images.length;
    this.setImg = this.setImg.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }
  componentDidMount() {
    this.autoScroll();
  }
  autoScroll() {
    this.timerID = setInterval(()=> {
      if (this.state.currImg === this.imgCount - 1) {
        this.setState({ currImg: 0 });
      } else {
        this.setState(state=> ({ currImg: state.currImg + 1 }))
      }
    }, 3000)
  }
  resetAutoScroll() {
    clearInterval(this.timerID);
    this.autoScroll();
  }
  handlePrevClick() {
    this.resetAutoScroll();
    if (this.state.currImg === 0) return;
    this.setState(state=> ({ currImg: state.currImg - 1 }));
  }
  handleNextClick() {
    this.resetAutoScroll();
    if (this.state.currImg === this.imgCount - 1) {
      this.setState({ currImg: 0 })
    } else {
      this.setState(state=> ({ currImg: state.currImg + 1 }));
    }
  }
  setImg(index) {
    this.resetAutoScroll();
    this.setState({ currImg: index });
  }
  render() {
    return(
      <>
        <div className="slider-container">
          <div className="btn-previous-container" onClick={ this.handlePrevClick }>
            <div className="btn-previous"></div>
          </div>
          <div className="img-container">
           <ImageList images={ this.props.images } currImg={ this.state.currImg } />
          </div>
          <div className="btn-next-container" onClick={ this.handleNextClick }>
            <div className="btn-next"></div>
          </div>
        </div>
        <div className="dots-container">
          <Dots setImg={ this.setImg } images={ this.props.images } currImg={ this.state.currImg } />
        </div>
      </>
    )
  }
}

class ImageList extends React.Component {
  render() {
    const currImg = this.props.currImg;
    let img = this.props.images.filter((image, index) => {
      if (currImg === index) return true;
    });
    return(
      <figure className="image">
        <img src={ img } alt={ `Slider Image` } />
      </figure>
    )
  }
}

class Dots extends React.Component {
  render() {
    const currImg = this.props.currImg;

    return this.props.images.map((image, index)=> {
      return(
        <div onClick={ ()=> this.props.setImg(index) } className={ `dot ${ currImg === index ? 'active' : ' '}` } key={ index }></div>
      )
    })
  }
}
