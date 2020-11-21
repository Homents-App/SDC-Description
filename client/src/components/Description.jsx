import React from 'react';

const Description = ({ descriptionText }) => (
  <div className="description">
    <div className="description-txt">Description</div>
    <div className="txt-box">{descriptionText}</div>
  </div>
);

export default Description;
