import React from 'react';

var HomeInfo = ({address, full_address, beds, baths, boxIcon, price, mortgage_est, sqft}) => {
  console.log(boxIcon)

  return (
    <div className="home-info">

    <div className="box_right">
      <div className="street-address">{address}</div>
      <div className="full-address">{full_address}</div>
      <div className="svg-block">
        <div className="bed-block">
          <div className="bed-icon"></div>
          <div className="bed-txt">{beds} beds</div>
        </div>
        <div className="bath-block">
          <div className="bath-icon"></div>
          <div className="bath-txt">{baths} baths</div>
        </div>
        <div className="sqft-block">
          <div className="sqft-icon"></div>
          <div className="sqft-txt">{sqft} sqft</div>
        </div>
      </div>

    </div>
    <div className="box_mid">
      <div className="price-txt">${price}</div>
      <div className="mortgage-txt">Est. Mortgage ${mortgage_est}/mo</div>
      <div className="price-btn">
        <button className="green-btn" type="button">Get Pre-Qualified</button>
      </div>
    </div>
    <div className="box_left">
      <div className="icon-pic">
        <img className="boxIcon-img" src={boxIcon}/>
      </div>
    </div>
  </div>
  )
}

export default HomeInfo;