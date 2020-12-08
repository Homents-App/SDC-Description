/* eslint-disable no-param-reassign */
import React from 'react';

import { formatNumber } from '../utils/Logic';
import { bed, bath, sqft } from '../utils/SVG';
import s from '../styles/HomeInfo.css';

const HomeInfo = ({ info }) => {
  const price = formatNumber(info.price.toString());
  const mortgage = formatNumber(Math.floor(info.mortgageest).toString());

  return (
    <div className={s.info}>
      <div className={s.firstGrid}>
        <div className={s.bold}>{info.address}</div>
        <div>{info.fulladdress}</div>

        <div className={s.bedBathContainer}>
          <div className={s.bedBath}>{bed}<div className={s.text}>{info.beds} beds</div></div>
          <div className={s.bedBath}>{bath}<div className={s.text}>{info.baths} baths</div></div>
          <div className={s.bedBath}>{sqft}<div className={s.text}>{info.sqft} sqft</div></div>
        </div>
      </div>

      <div className={s.gridContainer}>
        <div className={s.bold}>${price}</div>
        <div className={s.text}>Est. Mortgage ${mortgage}/mo</div>
        <button className={s.button} type="button">Get Pre-Qualified</button>
      </div>

      <div className={s.boxContainer}><div className={s.boxIcon} /></div>
    </div>
  );
};

export default HomeInfo;
