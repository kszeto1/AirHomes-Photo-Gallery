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

  max-width: 105vh !important;
  margin-left: auto !important;
  margin-right: auto !important;
  overflow: hidden !important;
`;
const ThumbnailSlider = (props) => {
  const { images } = props;
  const imageUrlList = images[0].imageUrl;
  console.log('imageUrlList:', imageUrlList);
  return (
    <SliderContainer>
      {imageUrlList.map((url) => { return <ThumbnailItem photo={url} />; })}
    </SliderContainer>
  );
};

export default ThumbnailSlider;
