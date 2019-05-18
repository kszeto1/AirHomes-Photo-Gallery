import React from 'react';
import ReactDOM from 'react-dom';

const divStyle = {
  display: 'block',
};

const largestDivStyle = {
  width: '50% !important',
};

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={divStyle}>
        <div style={largestDivStyle}>
          <img src="https://s3-us-west-1.amazonaws.com/fec-photo-gallery-ks/001.jpg" alt="" />
        </div>
        <img src="https://s3-us-west-1.amazonaws.com/fec-photo-gallery-ks/002.jpg" alt="" />
        <img src="https://s3-us-west-1.amazonaws.com/fec-photo-gallery-ks/003.jpg" alt="" />
        <img src="https://s3-us-west-1.amazonaws.com/fec-photo-gallery-ks/004.jpg" alt="" />
        <img src="https://s3-us-west-1.amazonaws.com/fec-photo-gallery-ks/005.jpg" alt="" />

      </div>
    );
  }
}

ReactDOM.render(<App image="https://s3-us-west-1.amazonaws.com/fec-photo-gallery-ks/001.jpg" />, document.getElementById('app'));
