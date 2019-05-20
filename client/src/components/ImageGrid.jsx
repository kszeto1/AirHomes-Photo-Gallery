import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 15.5vw);
  grid-gap: 0;
  width: 100%;
`;

const MainImage = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block; 
`;

const ImageGrid = (props) => {
  console.log(props.images[0][0]);
  return (
    <Grid>
      <MainImage>
        <Img src={props.images[0][0].imageUrl[0]} />
      </MainImage>
    </Grid>
  );
};

export default ImageGrid;
