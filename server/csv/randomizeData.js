/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
const faker = require('faker');

const homeInfodata = () => {
  const price = faker.random.number({ min: 5000, max: 2000000 });
  const sqft = faker.random.number({ min: 500, max: 5000 });
  const address = faker.address.streetAddress();
  const beds = faker.random.number({ min: 1, max: 10 });
  const baths = faker.random.number({ min: 1, max: 10 });
  const zipcode = faker.address.zipCode();
  const city = faker.address.city();

  return `${address}, '${city}, ${faker.random.arrayElement(['AZ', 'AL', 'AK', 'AR', 'CT', 'KS', 'LA', 'NV', 'OH', 'PA', 'NY'])} ${zipcode.slice(0, 5)} ', ${beds}, ${baths}, ${sqft}, ${price}, ${((price * 0.2 * 0.0296) - 825).toFixed(2)}, 'https://media-exp1.licdn.com/dms/image/C4E1BAQEDsBF9qsm5pA/company-background_10000/0?e=2159024400&v=beta&  t=Prdds8dn0WCH7_B7h6cIN4qcT4oTfcQmZi06PFZ5aes'\n`;
};

const mapdata = () => {
  const address = faker.address.streetAddress();

  return `'https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_640/https://s22908.pcdn.co/wp-content/uploads/2020/02/google-maps-alternatives.jpg',
  'Explore the area around ${address}.'\n`;
};

const streetdata = () => {
  return `'https://www.moneycrashers.com/wp-content/uploads/2018/12/tips-find-best-neighborhood-live-in-1068x713.jpg', 'Take a virtual walk around the neighborhood.'\n`;
};

const schooldata = () => {
   return `'https://www.ceias.nau.edu/capstone/projects/ME/2018/POBABalloonInspection/images/demo/map.png', 'Learn about the schools in this area.'\n`;
};

const commutedata = () => {
   return `'https://miro.medium.com/max/2392/1*uqdecsusmkON9hqir3eW4A.png', '${faker.random.number({ min: 10, max: 100 })}% of residents commute by car.'\n`;
};

const agentdata = () => {
  return `${faker.name.firstName()} ${faker.name.lastName()}\n`;

};

const descriptiondata = () => {
  const beds = faker.random.number({ min: 1, max: 10 });
  const baths = faker.random.number({ min: 1, max: 10 });
  const city = faker.address.city();

  return `Very beautiful ${beds} bedroom and ${baths} bathroom home located in ${city}. The roomy primary bedroom includes an en-suite bath with tile standup shower and walk-in closet. The second bedroom is large with plenty of room for a queen size bed with a dresser and offers two closets. The guest bathroom is just across the hall and includes a deep soaking tub with shower plus a linen closet. An in-unit laundry closet is also accessed off the hallway. A 12ftx14ft basement storage unit is included. Steps from grocery, wine & liquor, fitness, dog park, dry cleaners, pharmacy and the best shops and restaurants this amazing neighborhood has to offer. Easy to show!\n`;
};

const detailsdata = () => {
  const price = faker.random.number({ min: 5000, max: 2000000 });
  const sqft = faker.random.number({ min: 500, max: 5000 });
  const beds = faker.random.number({ min: 1, max: 10 });
  const baths = faker.random.number({ min: 1, max: 10 });
  const currentYear = new Date().getFullYear();

  return `${faker.random.arrayElement(['Baseboard', 'Forced Air', 'Boiler', 'Radiant'])}, ${faker.random.arrayElement(['Single Family Home', 'Condo', 'Townhome', 'Multi-Family'])}, ${faker.random.arrayElement(['None', 'Central', 'Air Conditioning'])}, ${faker.random.number({ min: 1, max: 30 })}, ${beds + baths}, ${faker.random.arrayElement(['Vinyl', 'Wood', 'Log', 'Metal', 'Brick', 'Stone', 'Concrete'])}, ${Math.ceil(price / sqft)}, ${faker.random.number({ min: 1930, max: currentYear })}, ${faker.random.number({ min: 1, max: 5 })}, ${faker.random.arrayElement(['Bamboo', 'Hardwood', 'Tile', 'Carpet', 'Laminate'])}, ${faker.random.arrayElement(['Asphalt', 'Wood Shingle', 'Metal Shingle', 'Clay Tile', 'Concrete Tile', 'Slate'])}, ${Math.floor(Math.random() * 100000000)}\n`;
};

const pricedata = () => {
  const pastDate = faker.date.past(10);
  const currentDate = new Date();
  const price = faker.random.number({ min: 5000, max: 2000000 });

  return `${faker.date.between(pastDate, currentDate)}, ${faker.random.number({ min: (price - 20), max: price })}, ${faker.random.arrayElement(['Listed For Sale', 'Listing Removed', 'Sold'])}\n`;
};

module.exports = {
  homeInfodata,
  detailsdata,
  pricedata,
  mapdata,
  streetdata,
  commutedata,
  descriptiondata,
  agentdata,
  schooldata,
};
