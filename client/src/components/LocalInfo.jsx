import React from 'react';

const LocalInfo = ({ info }) => (
  <div className="local-info">
    <div className="local-txt">Local Information</div>
    <div className="slider-boxes">
      <div className="map-box">
        <div className="map-icon">
          <img className="map-img" src={info.mapView.image} alt="mapImg" />
        </div>
        <div className="map-heading">Map View</div>
        <div className="map-txt">{info.mapView.text}</div>
      </div>

      <div className="street-box">
        <div className="street-icon">
          <img className="street-img" src={info.streetView.image} alt="streetImg" />
        </div>
        <div className="street-heading">Street View</div>
        <div className="street-txt">{info.streetView.text}</div>
      </div>
      <div className="school-box">
        <div className="school-icon">
          <img className="schools-img" src={info.schools.image} alt="schoolImg" />
        </div>
        <div className="school-heading">Schools</div>
        <div className="school-txt">{info.schools.text}</div>
      </div>
      <div className="commute-box">
        <div className="commute-icon">
          <img className="commute-img" src={info.commute.image} alt="commuteImg" />
        </div>
        <div className="commute-heading">Commute</div>
        <div className="commute-txt">{info.commute.text}</div>
      </div>
    </div>
    <div className="listing-agent">Listing Agent: {info.listingAgent}</div>
  </div>
);

export default LocalInfo;
