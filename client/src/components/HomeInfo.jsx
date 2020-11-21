import React from 'react';

const HomeInfo = ({ info }) => {
  console.log(info.boxIcon);

  return (
    <div className="home-info">

      <div className="box_right">
        <div className="street-address">{info.address}</div>
        <div className="full-address">{info.fullAddress}</div>
        <div className="svg-block">
          <div className="bed-block">
            <div className="bed-icon" />
            <div className="bed-txt">{info.beds} beds</div>
          </div>
          <div className="bath-block">
            <div className="bath-icon" />
            <div className="bath-txt">{info.baths} baths</div>
          </div>
          <div className="sqft-block">
            <div className="sqft-icon" />
            <div className="sqft-txt">{info.sqft} sqft
            </div>
          </div>
        </div>

      </div>
      <div className="box_mid">
        <div className="price-txt">${info.price}</div>
        <div className="mortgage-txt">Est. Mortgage ${info.mortgageEst}/mo</div>
        <div className="price-btn">
          <button className="green-btn" type="button">Get Pre-Qualified</button>
        </div>
      </div>
      <div className="box_left">
        <div className="icon-pic">
          <img className="boxIcon-img" src={info.boxIcon} alt="boxIcon" />
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
