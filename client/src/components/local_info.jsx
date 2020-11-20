import React from 'react';

var LocalInfo = ({map_view_image, map_view_text, street_view_image, street_view_text, schools_image, schools_text, commute_image, commute_text, listing_agent}) => {

  return (
    <div className="local-info">
          <div className="local-txt">Local Information</div>
          <div className="slider-boxes">
            <div className="map-box">
              <div className="map-icon">
                <img className="map-img" src={map_view_image}/>
              </div>
              <div className="map-heading">Map View</div>
              <div className="map-txt">{map_view_text}</div>
            </div>

            <div className="street-box">
              <div className="street-icon">
                <img className="street-img" src={street_view_image}/>
              </div>
              <div className="street-heading">Street View</div>
              <div className="street-txt">{street_view_text}</div>
            </div>
            <div className="school-box">
              <div className="school-icon">
               <img className="schools-img" src={schools_image}/>
              </div>
              <div className="school-heading">Schools</div>
              <div className="school-txt">{schools_text}</div>
            </div>
            <div className="commute-box">
              <div className="commute-icon">
                <img className="commute-img" src={commute_image}/>
              </div>
              <div className="commute-heading">Commute</div>
              <div className="commute-txt">{commute_text}</div>
            </div>
          </div>
          <div className="listing-agent">Listing Agent: {listing_agent}</div>
        </div>
  )
}

export default LocalInfo;