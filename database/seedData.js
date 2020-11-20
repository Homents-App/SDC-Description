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
  var city = faker.address.city();
  var zipcode =faker.address.zipCode();

  return {

    home_info: {
      address: address,
      full_address: `${city}, ${faker.random.arrayElement(['AZ', 'AL', 'AK', 'AR', 'CT', 'KS', 'LA', 'NV', 'OH', 'PA', 'NY'])} ${zipcode.slice(0, 5)} `,
      beds: beds,
      baths: baths,
      sqft: sqft,
      price: price,
      mortgage_est: ((price * 0.2 * 0.0296) - 825).toFixed(2),
      boxIcon: "https://media-exp1.licdn.com/dms/image/C4E1BAQEDsBF9qsm5pA/company-background_10000/0?e=2159024400&v=beta&t=Prdds8dn0WCH7_B7h6cIN4qcT4oTfcQmZi06PFZ5aes"
    },

    map_view: {
      image: "https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_640/https://s22908.pcdn.co/wp-content/uploads/2020/02/google-maps-alternatives.jpg",
      text : `Explore the area around ${address}.`
    },
    street_view: {
      image: "https://www.moneycrashers.com/wp-content/uploads/2018/12/tips-find-best-neighborhood-live-in-1068x713.jpg",
      text : 'Take a virtual walk around the neighborhood.'
    },
    schools: {
      image: "https://www.ceias.nau.edu/capstone/projects/ME/2018/POBABalloonInspection/images/demo/map.png",
      text: 'Learn about the schools in this area.'
    },
    commute: {
      image: "https://miro.medium.com/max/2392/1*uqdecsusmkON9hqir3eW4A.png",
      text: `${faker.random.number({min:10, max:100})}% of residents commute by car.`
    },
    listing_agent:`${faker.name.firstName()} ${faker.name.lastName()}`,

    description_text:`Very beautiful ${beds} bedroom and ${baths} bathroom home located in ${city}. The roomy primary bedroom includes an en-suite bath with tile standup shower and walk-in closet. The second bedroom is large with plenty of room for a queen size bed with a dresser and offers two closets. The guest bathroom is just across the hall and includes a deep soaking tub with shower plus a linen closet. An in-unit laundry closet is also accessed off the hallway. A 12ftx14ft basement storage unit is included. Steps from grocery, wine & liquor, fitness, dog park, dry cleaners, pharmacy and the best shops and restaurants this amazing neighborhood has to offer. Easy to show!`,

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

