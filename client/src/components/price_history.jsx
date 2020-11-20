import React from 'react';

var PriceHistory = ({home_date, event, home_price}) => {
var date = home_date.slice(0, 10)

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
            <td>${home_price}</td>
            <td>{event}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default PriceHistory;