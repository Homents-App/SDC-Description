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

  return `${address}>'${city}, ${faker.random.arrayElement(['AZ', 'AL', 'AK', 'AR', 'CT', 'KS', 'LA', 'NV', 'OH', 'PA', 'NY'])} ${zipcode.slice(0, 5)}'>${beds}>${baths}>${sqft}>${price}>${((price * 0.2 * 0.0296) - 825).toFixed(2)}>'https://media-exp1.licdn.com/dms/image/C4E1BAQEDsBF9qsm5pA/company-background_10000/0?e=2159024400&v=beta&t=Prdds8dn0WCH7_B7h6cIN4qcT4oTfcQmZi06PFZ5aes'\n`;
};

const agentdata = () => `${faker.name.firstName()} ${faker.name.lastName()}\n`;

const descriptiondata = () => {
  const beds = faker.random.number({ min: 1, max: 10 });
  const baths = faker.random.number({ min: 1, max: 10 });
  const city = faker.address.city();

  return `Very beautiful ${beds} bedroom and ${baths} bathroom home located in ${city}.\n`;
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
  descriptiondata,
  agentdata,
};
