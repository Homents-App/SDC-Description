import React from 'react';

var HomeDetails = ({address, cooling_sys, days_on_market, exterior, floors, heating, mls_source_id, number_of_rooms, parking_spaces, price_per_sqft, property_type, roof, year_built}) => {

  return (
    <div className="home-details">
      <div className="detail-title">Home Details for {address}</div>
      <div className="list-container">
        <div className="box1">
          <ul>
            <li>Cooling System: {cooling_sys}</li>
            <li>Days on Market: {days_on_market} Days on Trulia</li>
            <li>Exterior: {exterior}</li>
            <li>Year Built: {year_built}</li>
          </ul>
        </div>
        <div className="box2">
        <ul>
            <li>Floors: {floors}</li>
            <li>Heating: {heating}</li>
            <li>Property Type: {property_type}</li>
            <li>Number of Rooms: {number_of_rooms}</li>
          </ul>
        </div>
        <div className="box3">
        <ul>
            <li>Parking Spaces: {parking_spaces}</li>
            <li>Price Per Sqft: ${price_per_sqft}</li>
            <li>Roof: {roof}</li>
            <li>MLS/Source ID: {mls_source_id}</li>
          </ul>
        </div>
      </div>
      <div className="see-all-button-container">
        <button className="see-all-btn" type="button">See All</button>
      </div>
    </div>
  )
}

export default HomeDetails;