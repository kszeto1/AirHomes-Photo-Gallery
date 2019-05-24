import React from 'react';
import styled from 'styled-components';


const ListItem = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;

  float: left !important;
  background-color: rgb(0, 0, 0) !important;
  margin-left: 10px !important;
`;

const ListButton = styled.button`
  font-weight: inherit !important;
  opacity: 0.5 !important;
  backface-visibility: hidden !important;
  position: relative !important;
  display: inline-block !important;
  vertical-align: bottom !important;
  overflow: hidden !important;
  background: transparent !important;
  border-width: 0px !important;
  border-style: initial !important;
  border-color: initial !important;
  border-image: initial !important;
  margin: 0px !important;
  padding: 0px !important;
  -webkit-appearance: button;
  cursor: pointer;

  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  font: 400 11px system-ui;
`;

const ListImg = styled.img`
  width: 100px !important;
  height: 67px !important;
}
`;
const ThumbnailItem = (props) => {
  console.log(props.photo);
  const { photo } = props;
  return (
    <ListItem>
      <ListButton>
        <ListImg src={photo} />
      </ListButton>
    </ListItem>
  );
};

export default ThumbnailItem;
