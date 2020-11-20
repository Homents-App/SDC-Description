import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import HomeInfo from './components/home_info.jsx';
import LocalInfo from './components/local_info.jsx';
import Description from './components/description.jsx';
import HomeDetails from './components/home_details.jsx';
import PriceHistory from './components/price_history.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    axios.get('/api/home-description')
      .then((response) => {
        console.log(response.data);
        this.setState({data:response.data});
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div className="main-container">
          {this.state.data
            ? (<HomeInfo
            address= {this.state.data.home_info.address}
            full_address= {this.state.data.home_info.full_address}
            beds= {this.state.data.home_info.beds}
            baths= {this.state.data.home_info.baths}
            sqft= {this.state.data.home_info.sqft}
            price= {this.state.data.home_info.price}
            mortgage_est= {this.state.data.home_info.mortgage_est}
            boxIcon= {this.state.data.home_info.boxIcon}
          />): null
          }

          {this.state.data
            ? (<LocalInfo
            map_view_image= {this.state.data.map_view.image}
            map_view_text= {this.state.data.map_view.text}
            street_view_image= {this.state.data.street_view.image}
            street_view_text= {this.state.data.street_view.text}
            schools_image={this.state.data.schools.image}
            schools_text={this.state.data.schools.text}
            commute_image={this.state.data.commute.image}
            commute_text={this.state.data.commute.text}
            listing_agent= {this.state.data.listing_agent}
          />): null
          }

          {this.state.data
            ? (<Description
            description_text= {this.state.data.description_text}
          />): null
          }

          {this.state.data
            ? (<HomeDetails
            address= {this.state.data.home_info.address}
            cooling_sys= {this.state.data.home_details.cooling_system}
            days_on_market= {this.state.data.home_details.days_on_market}
            exterior= {this.state.data.home_details.exterior}
            floors={this.state.data.home_details.floors}
            heating={this.state.data.home_details.heating}
            mls_source_id= {this.state.data.home_details.mls_source_id}
            number_of_rooms= {this.state.data.home_details.number_of_rooms}
            parking_spaces= {this.state.data.home_details.parking_spaces}
            price_per_sqft= {this.state.data.home_details.price_per_sqft}
            property_type= {this.state.data.home_details.property_type}
            roof= {this.state.data.home_details.roof}
            year_built= {this.state.data.home_details.year_built}
          />): null
          }

          {this.state.data
            ? (this.state.data.price_history.map((items) => {
             return <PriceHistory
                home_date= {items.date}
                event= {items.event}
                home_price= {items.price}
              />
            })
            ): null
          }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
