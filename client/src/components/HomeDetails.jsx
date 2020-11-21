import React from 'react';

const HomeDetails = ({ details }) => (
  <div className="home-details">
    <div className="detail-title">Home Details for {details.address}</div>
    <div className="list-container">
      <div className="box1">
        <ul>
          <li>Cooling System: {details.coolingSys}</li>
          <li>Days on Market: {details.daysOnMarket} Days on Trulia</li>
          <li>Exterior: {details.exterior}</li>
          <li>Year Built: {details.yearBuilt}</li>
        </ul>
      </div>
      <div className="box2">
        <ul>
          <li>Floors: {details.floors}</li>
          <li>Heating: {details.heating}</li>
          <li>Property Type: {details.propertyType}</li>
          <li>Number of Rooms: {details.numberOfRooms}</li>
        </ul>
      </div>
      <div className="box3">
        <ul>
          <li>Parking Spaces: {details.parkingSpaces}</li>
          <li>Price Per Sqft: ${details.pricePerSqft}</li>
          <li>Roof: {details.roof}</li>
          <li>MLS/Source ID: {details.mlsSourceId}</li>
        </ul>
      </div>
    </div>
    <div className="see-all-button-container">
      <button className="see-all-btn" type="button">See All</button>
    </div>
  </div>
);

export default HomeDetails;
