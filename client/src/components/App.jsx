import React from 'react';
import Axios from 'axios';
import styled from 'styled-components';
import ImageGrid from './ImageGrid.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      hasLoaded: false,
    };
    this.getAll = this.getAll.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  getAll() {
    Axios.get('/photoGallery')
      .then((response) => {
        const ImgCollection = [];
        ImgCollection.push(response.data);
        this.setState({ images: ImgCollection, hasLoaded: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    // console.log('state:', this.state.images);
    const { images } = this.state;
    const { hasLoaded } = this.state;

    if (hasLoaded) {
      // TODO: randomListing not same listing every time
      const randomListing = Math.floor(Math.random() * 100);
      return (<ImageGrid images={images} />);
    }
    return (<div />);
  }
}

export default App;

// <Container>
//   <Figure>
//     <MainImg>
//       <Img src={images[randomListing].imageUrl[0]} alt="" />
//     </MainImg>
//     <DoubleImg>
//       <Img src={images[randomListing].imageUrl[1]} alt="" />
//       <Img src={images[randomListing].imageUrl[2]} alt="" />
//     </DoubleImg>
//     <DoubleImg>
//       <Img src={images[randomListing].imageUrl[3]} alt="" />
//       <Img src={images[randomListing].imageUrl[4]} alt="" />
//     </DoubleImg>
//   </Figure>
// </Container>