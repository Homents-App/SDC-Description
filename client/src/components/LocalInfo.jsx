import React from 'react';

import { agent } from '../utils/SVG';
import s from '../styles/LocalInfo.css';

import LocalSlider from './LocalSlider';

const crime = {
  n: 'Crime', image: 'https://static.trulia-cdn.com/images/txl3R/local_cards/crime.svg', text: 'Lowest crime rate relative to its area.',
};

const shopneat = {
  n: 'Shop & Eat', image: 'https://static.trulia-cdn.com/images/txl3R/local_cards/shop_eat.svg', text: '135 Restaurants\n35 Groceries\n22 Nightlife',
};

const LocalInfo = ({ info }) => {
  // Slider items should have map, street, school, crime, commute, shop & eat
  const sliderItems = [
    { n: 'Map View', image: info.mapView.image, text: info.mapView.text },
    { n: 'Street View', image: info.streetView.image, text: info.streetView.text },
    { n: 'Schools', image: info.schools.image, text: info.schools.text },
    crime,
    { n: 'Commute', image: info.commute.image, text: info.commute.text },
    shopneat,
  ];

  return (
    <div className={s.info}>
      <div className={`${s.bold} ${s.header}`}>Local Information</div>
      <LocalSlider sliderItems={sliderItems} />
      <div>Listing Agent: <p className={s.link}>{info.listingAgent}</p>{agent}</div>
    </div>
  );
};

export default LocalInfo;
