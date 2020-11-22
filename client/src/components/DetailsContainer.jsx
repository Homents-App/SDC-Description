import React from 'react';

const pad = { margin: '0 160px 20px 0' };

const DetailsContainer = ({ items }) => (
  <div>
    <ul>
      <li style={pad}>{items[0].item} {items[0].value}</li>
      <li style={pad}>{items[1].item} {items[1].value}</li>
      <li style={pad}>{items[2].item} {items[2].value}</li>
    </ul>
  </div>
);

export default DetailsContainer;
