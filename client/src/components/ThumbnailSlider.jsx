import React from 'react';
import styled from 'styled-components';
import ThumbnailItem from './ThumbnailItem.jsx';

const SliderContainer = styled.div`
  background-image: none !important;
  background-color: transparent !important;
  position: absolute !important;
  right: 0px !important;
  bottom: 0px !important;
  left: 0px !important;
  z-index: 2 !important;
  text-align: center !important;
  color: rgb(255,255,255) !important;
  overflow: hidden !important;
  border-radius: 0px !important;
  margin-bottom: 24px;

  width: 11110px !important;
  margin-left: auto !important;
  margin-right: auto !important;
  overflow: hidden !important;
`;

const UnorderedList = styled.ul`
  list-style-type: none;
`;
class ThumbnailSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { images } = this.props;
    console.log('thumbnailslider:', { images });
    const imageUrlList = { images }.images;
    console.log('imageurllist', imageUrlList);
    return (
      <SliderContainer>
        <UnorderedList>
          {imageUrlList.map((url) => { return <ThumbnailItem photo={url} />; })}
        </UnorderedList>
      </SliderContainer>
    );
  }
}

export default ThumbnailSlider;
