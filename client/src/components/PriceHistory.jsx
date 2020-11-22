import React from 'react';

import s from '../styles/PriceHistory.css';

const PriceHistory = ({ homeDate, event, homePrice }) => {
  const date = homeDate.slice(0, 10);

  return (
    <div className={s.history}>
      <div className={s.title}>Price History for</div>
      <table className={s.table}>
        <tr>
          <th className={s.th}>Date</th>
          <th className={s.th}>Price</th>
          <th className={s.th}>Event</th>
        </tr>
        <tr>
          <td className={s.td}>{date}</td>
          <td className={s.td}>${homePrice}</td>
          <td className={s.td}>{event}</td>
        </tr>
      </table>
    </div>
  );
};

export default PriceHistory;
