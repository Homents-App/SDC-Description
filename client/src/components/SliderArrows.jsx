import React from 'react';

import { left, right } from '../utils/SVG';
import s from '../styles/SliderArrows.css';

const SliderArrows = ({ direction, setDirection, arrowDir }) => {
  const toRender = arrowDir === 'right' ? right : left;
  const changeTo = arrowDir === 'right' ? 'left' : 'right';

  // Adds appropriate styles based on which arrow is rendering.
  let style = arrowDir === 'right' ? s.right : s.left;
  arrowDir !== direction ? style += ` ${s.hide}` : style += ` ${s.show}`;

  return (
    <div className={style}>
      <button className={s.arrow} type="button" onClick={() => setDirection(changeTo)}>
        {toRender}
      </button>
    </div>
  );
};

export default SliderArrows;
