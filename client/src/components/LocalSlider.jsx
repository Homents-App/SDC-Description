import React, { useState } from 'react';

import s from '../styles/LocalSlider.css';

import SliderArrows from './SliderArrows';

const LocalSlider = ({ sliderItems }) => {
  const [direction, setDirection] = useState('right');
  const arrStyle = direction === 'left' ? `${s.transform} ${s.grid}` : s.grid;

  return (
    <div className={s.container}>
      <SliderArrows direction={direction} setDirection={setDirection} arrowDir="left" />
      <div className={s.slider}>
        {sliderItems.map((item) => (
          <div className={arrStyle}>
            <div className={s.imageContainer}>
              <img className={s.image} src={item.image} alt="A grid pic" />

            </div>
            <div className={`${s.bold} ${s.head}`}>{item.n}</div>
            <div className={s.text}>{item.text}</div>
          </div>
        )) }
      </div>
      <SliderArrows direction={direction} setDirection={setDirection} arrowDir="right" />

    </div>

  );
};

export default LocalSlider;
