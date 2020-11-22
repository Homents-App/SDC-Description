import React from 'react';

const header = {
  'font-family': 'TruliaSansBold', 'font-size': '20px', 'line-height': 1.2, padding: '0px 0px 8px', margin: '32px 0px 20px',
};

const Description = ({ descriptionText }) => (
  <div>
    <div style={header}>Description</div>
    <div>{descriptionText}</div>
  </div>
);

export default Description;
