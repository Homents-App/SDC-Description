const faker = require('faker');
const db = require('./helper.js');

//function generates an array with random data w/o using a foor loop
const createData = (num, input) => {
  return new Array(num)
    .fill(undefined)
    .map(input);
}

const homeInfodata = () => {
  var price = faker.random.number({min:5000, max:2000000});
  var sqft = faker.random.number({min:500, max:5000});
  var address = faker.address.streetAddress();
  var beds = faker.random.number({min:1, max:10});
  var baths = faker.random.number({min:1, max:10});
  var currentYear = new Date().getFullYear();
  var pastDate = faker.date.past(10);
  var currentDate = new Date();

  return {

    home_info: {
      address: address,
      beds: beds,
      baths: baths,
      sqft: sqft,
      price: price,
      mortgage_est: ((price * 0.2 * 0.0296) - 825).toFixed(2)
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
      heating: faker.random.arrayElement(['Baseboard', 'Forced Air', 'Boiler', 'Radiant']),
      property_type: faker.random.arrayElement(['Single Family Home', 'Condo', 'Townhome', 'Multi-Family']),
      cooling_system: faker.random.arrayElement(['None', 'Central', 'Air Conditioning']),
      days_on_market: faker.random.number({min:1, max:30}), //Days on Trulia
      number_of_rooms: beds + baths,
      exterior: faker.random.arrayElement(['Vinyl', 'Wood', 'Log', 'Metal', 'Brick', 'Stone', 'Concrete']),
      price_per_sqft: Math.ceil(price / sqft),
      year_built: faker.random.number({min:1930, max:currentYear}),
      parking_spaces: faker.random.number({min:1, max:5}),
      floors: faker.random.arrayElement(['Bamboo', 'Hardwood', 'Tile', 'Carpet', 'Laminate']),
      roof: faker.random.arrayElement(['Asphalt', 'Wood Shingle', 'Metal Shingle', 'Clay Tile', 'Concrete Tile', 'Slate']),
      mls_source_id: Math.floor(Math.random() * 100000000),
    },

    price_history : [
      {
        date: faker.date.between(pastDate, currentDate),
        price: faker.random.number({min:(price-20), max:price}),
        event: faker.random.arrayElement(['Listed For Sale', 'Listing Removed', 'Sold'])
      }
    ]

  }
}

let fakeHomeInfo = createData(2, homeInfodata)
db.saveHomeInfo(fakeHomeInfo)

