import React from 'react';

const PriceHistory = ({ homeDate, event, homePrice }) => {
  const date = homeDate.slice(0, 10);

  return (
    <div className="price-history">
      <div className="pricehistory-txt">Price History for</div>
      <div className="table-box">
        <table>
          <tr>
            <th>Date</th>
            <th>Price</th>
            <th>Event</th>
          </tr>
          <tr>
            <td>{date}</td>
            <td>${homePrice}</td>
            <td>{event}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default PriceHistory;
