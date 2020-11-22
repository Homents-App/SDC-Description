import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';
import s from './styles/Globals.css';

import HomeInfo from './components/HomeInfo';
import LocalInfo from './components/LocalInfo';
import Description from './components/Description';
import HomeDetails from './components/HomeDetails';
import PriceHistory from './components/PriceHistory';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeInfo: null,
      localInfo: null,
      priceHistory: null,
      descriptionText: null,
      homeDetails: null,
    };
  }

  componentDidMount() {
    axios.get('/api/home-description')
      .then((response) => {
        // console.log(response.data);
        const { homeInfo, priceHistory, homeDetails, descriptionText, localInfo } = response.data;
        this.setState({ homeInfo, priceHistory, homeDetails, descriptionText, localInfo });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { homeInfo, priceHistory, homeDetails, descriptionText, localInfo } = this.state;
    return (
      <div className={s.mainContainer}>
        {homeInfo && (<HomeInfo info={homeInfo} />)}

        {localInfo && (<LocalInfo info={localInfo} />)}

        {descriptionText && (<Description descriptionText={descriptionText} />)}

        {homeDetails && (<HomeDetails details={homeDetails} address={homeInfo.address} />)}

        {priceHistory && (
          priceHistory.map((item) => (
            <PriceHistory homeDate={item.date} event={item.event} homePrice={item.price} />
          ))
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('description'));
