import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import HomeInfo from './components/home_info';
import LocalInfo from './components/local_info';
import Description from './components/description';
import HomeDetails from './components/home_details';
import PriceHistory from './components/price_history';

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
        console.log(response.data);
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
      <div className="main-container">
        {homeInfo && (<HomeInfo info={homeInfo} />)}

        {localInfo && (<LocalInfo info={localInfo} />)}

        {descriptionText && (<Description descriptionText={descriptionText} />)}

        {homeDetails && (<HomeDetails details={homeDetails} />)}

        {priceHistory && (
          priceHistory.map((item) => (
            <PriceHistory homeDate={item.date} event={item.event} homePrice={item.price} />
          ))
        )}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
