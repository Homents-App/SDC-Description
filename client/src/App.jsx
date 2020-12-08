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
    const id = Math.floor(Math.random() * (10000000 - 1) + 1);

    axios.get(`/api/home-info/${id}`)
      .then((response) => {
        console.log(response.data.rows[0]);
        const homeInfo = response.data.rows[0];
        this.setState({ homeInfo });
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get(`/api/home-detail/${id}`)
      .then((response) => {
        const homeDetails = response.data.rows[0];
        this.setState({ homeDetails });
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get(`/api/home-descrip/${id}`)
      .then((response) => {
        const descriptionText = response.data.rows[0].descriptiontext;
        this.setState({ descriptionText });
      })
      .catch((error) => {
        console.log(error);
      });
    axios.get(`/api/home-price/${id}`)
      .then((response) => {
        const priceHistory = response.data.rows[0];
        this.setState({ priceHistory });
      })
      .catch((error) => {
        console.log(error);
      });

    const idTwo = Math.floor(Math.random() * (200000 - 1) + 1);
    // axios.get(`/api/home-comm/${idTwo}`)
    //   .then((response) => {
    //     this.setState((prevState) => ({
    //       localInfo: {
    //         ...prevState.localInfo,
    //         commute: response.data.rows[0],
    //       },
    //     }));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    axios.get(`/api/home-agent/${idTwo}`)
      .then((response) => {
        this.setState((prevState) => ({
          localInfo: {
            ...prevState.localInfo,
            listingAgent: response.data.rows[0].listingAgent,
          },
        }));
      })
      .catch((error) => {
        console.log(error);
      });

    // const idThree = 1;
    // axios.get(`/api/home-map/${idThree}`)
    //   .then((response) => {
    //     this.setState((prevState) => ({
    //       localInfo: {
    //         ...prevState.localInfo,
    //         mapView: response.data.rows[0],
    //       },
    //     }));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // axios.get(`/api/home-street/${idThree}`)
    //   .then((response) => {
    //     this.setState((prevState) => ({
    //       localInfo: {
    //         ...prevState.localInfo,
    //         streetView: response.data.rows[0],
    //       },
    //     }));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // axios.get(`/api/home-school/${idThree}`)
    //   .then((response) => {
    //     console.log('sschool', response.data.rows[0]);

    //     this.setState((prevState) => ({
    //       localInfo: {
    //         ...prevState.localInfo,
    //         schools: response.data.rows[0],
    //       },
    //     }));
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  render() {
    const { homeInfo, priceHistory, homeDetails, descriptionText, localInfo } = this.state;
    return (
      <div className={s.mainContainer}>
        {homeInfo && (<HomeInfo info={homeInfo} />)}

        {localInfo && (<LocalInfo info={localInfo} />)}

        {descriptionText && (<Description descriptionText={descriptionText} />)}

        {homeDetails && (<HomeDetails details={homeDetails} address={homeInfo.address} />)}

        {/* eslint-disable-next-line max-len */}
        {priceHistory && (<PriceHistory homeDate={priceHistory.date} event={priceHistory.event} homePrice={priceHistory.price} />)}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('description'));
