const faker = require('faker');
const db = require('./helper.js');



//function generates an array with random data w/o using a foor loop
const createData = (numUsers, input) => {
  return new Array(numUsers)
    .fill(undefined)
    .map(input);
}

const homeInfodata = () => {
  var price = faker.random.number({min:5000, max:20000000});
  var sqft = faker.random.number({min:500, max:5000});
  var address = faker.address.streetAddress();
  var beds = faker.random.number({min:1, max:10});
  var baths = faker.random.number({min:1, max:10});
  var heaters = ['Baseboard', 'Forced Air', 'Boiler', 'Radiant'];
  var propertyTypes = ['Single Family Home', 'Condo', 'Townhome', 'Multi-Family'];
  var coolers = ['None', 'Central', 'Air Conditioning'];
  var exteriorTypes = ['Vinyl', 'Wood', 'Log', 'Metal', 'Brick', 'Stone', 'Concrete'];
  var floorTypes = ['Bamboo', 'Hardwood', 'Tile', 'Carpet', 'Laminate'];
  var roofTypes = ['Asphalt', 'Wood Shingle', 'Metal Shingle', 'Clay Tile', 'Concrete Tile', 'Slate'];
  var currentYear = new Date().getFullYear();
  var pastDate = faker.date.past(10);
  var currentDate = new Date();
  var events = ['Listed For Sale', 'Listing Removed', 'Sold'];


  return {

    home_info: {
      address: address,
      beds: beds,
      baths: baths,
      sqft: sqft,
      price: price,
      mortgage_est: 3
    },

    map_view: {
      image: faker.image.city(),
      text : `Explore the area around ${address}.`
    },
    street_view: {
      image: faker.image.city(),
      text : 'Take a virtual walk around the neighborhood.'
    },
    schools: {
      image: faker.image.city(),
      text: 'Learn about the schools in this area.'
    },
    commute: {
      image: faker.image.transport(),
      text: `${faker.random.number({min:10, max:100})}% of residents commute by car.`
    },

    description_text: {
    text: 'faker creates sentences in lorem not english'
    //faker.lorem.paragraphs()
    },

    home_details: {
      heating: heaters[Math.floor(Math.random() * 4)],
      property_type: propertyTypes[Math.floor(Math.random() * 4)],
      cooling_system: coolers[Math.floor(Math.random() * 3)],
      days_on_market: faker.random.number({min:1, max:30}), //Days on Trulia
      number_of_rooms: beds + baths,
      exterior: exteriorTypes[Math.floor(Math.random() * 7)],
      price_per_sqft: Math.ceil(price / sqft),
      year_built: faker.random.number({min:1800, max:currentYear}),
      parking_spaces: faker.random.number({min:1, max:5}),
      floors: floorTypes[Math.floor(Math.random() * 5)],
      roof: roofTypes[Math.floor(Math.random() * 6)],
      mls_source_id: Math.floor(Math.random() * 100000000),
    },

    price_history : [
      {
        date: faker.date.between(pastDate, currentDate),
        price: faker.random.number({min:(price-20), max:price}),
        event: events[Math.floor(Math.random() * 3)]
      }
    ]

  }
}
let fakeHomeInfo = createData(1, homeInfodata)
db.saveHomeInfo(fakeHomeInfo)

