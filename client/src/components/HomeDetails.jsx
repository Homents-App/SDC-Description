import React, { useState } from 'react';

import { formatHardCoded } from '../utils/Logic';
import s from '../styles/HomeDetails.css';

import DetailsContainer from './DetailsContainer';

const HomeDetails = ({ details, address }) => {
  const data = formatHardCoded(details);
  const [show, toggleShow] = useState(false);
  const toggle = () => toggleShow(!show);
  const bText = show ? 'See Less' : 'See All';
  const flex = show ? `${s.show} ${s.flex}` : s.flex;

  return (
    <div>
      <div className={s.header}>Home Details for {address}</div>
      <div className={flex}>
        <DetailsContainer items={data[0]} />
        <DetailsContainer items={data[1]} />
        <DetailsContainer items={data[2]} />
        <DetailsContainer items={data[3]} />
      </div>
      <button className={s.button} type="button" onClick={toggle}>{bText}</button>
    </div>
  );
};

export default HomeDetails;
