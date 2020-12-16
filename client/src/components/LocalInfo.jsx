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
    { n: 'Map View', image: 'https://im4.ezgif.com/tmp/ezgif-4-141149bd23dd.webp', text: 'Learn about the schools in this area.' },
    { n: 'Street View', image: 'https://www.moneycrashers.com/wp-content/uploads/2018/12/tips-find-best-neighborhood-live-in-1068x713.jpg', text: 'Take a virtual walk around the neighborhood.' },
    { n: 'Schools', image: 'https://www.ceias.nau.edu/capstone/projects/ME/2018/POBABalloonInspection/images/demo/map.png', text: 'Learn about the schools in this area.' },
    crime,
    { n: 'Commute', image: 'https://im4.ezgif.com/tmp/ezgif-4-52540f05f1b6.webp', text: '28% of residents commute by car.' },
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
