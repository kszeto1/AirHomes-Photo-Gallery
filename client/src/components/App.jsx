import React from 'react';
import Axios from 'axios';
import ImageGrid from './ImageGrid.jsx';
import Carousel from './Carousel.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      hasLoaded: false,
      clickedGrid: false,
    };
    this.getAll = this.getAll.bind(this);
    this.handleGridClick = this.handleGridClick.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    Axios.get('/photoGallery')
      .then((response) => {
        const ImgCollection = [];
        ImgCollection.push(response.data[0]);
        console.log(ImgCollection);
        this.setState({ images: ImgCollection, hasLoaded: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleGridClick(event) {
    this.setState({ clickedGrid: !(this.state.clickedGrid) });
    event.preventDefault();
  }

  render() {
    // console.log('state:', this.state.images);
    const { images } = this.state;
    const { hasLoaded } = this.state;
    const { clickedGrid } = this.state;

    if (hasLoaded) {
      if (!clickedGrid) {
        return (<ImageGrid images={images} onClick={this.handleGridClick} />);
      }
      return (<Carousel handleClick={this.handleGridClick} />);
    }
    return (<div />);
  }
}

export default App;
