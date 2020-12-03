DROP DATABASE IF EXISTS HomeSchema;
CREATE DATABASE HomeSchema;

CREATE TABLE IF NOT EXISTS homeInfo (
  id SERIAL NOT NULL,
  address VARCHAR(144),
  fullAddress VARCHAR(144),
  beds INT,
  baths INT,
  sqft INT,
  price INT,
  mortgageEst INT,
  boxIcon VARCHAR(144)
);

CREATE TABLE IF NOT EXISTS mapView ( image VARCHAR(144), text VARCHAR(144) );
CREATE TABLE IF NOT EXISTS streetView ( image VARCHAR(144), text VARCHAR(144) );
CREATE TABLE IF NOT EXISTS schools ( image VARCHAR(144), text VARCHAR(144) );
CREATE TABLE IF NOT EXISTS commute ( image VARCHAR(144), text VARCHAR(144) );
CREATE TABLE IF NOT EXISTS listingAgent( listingAgent VARCHAR(144) );
CREATE TABLE IF NOT EXISTS descriptionText( descriptionText VARCHAR(144) );

CREATE TABLE IF NOT EXISTS homeDetails (
  heating VARCHAR(144),
  propertyType VARCHAR(144),
  coolingSystem VARCHAR(144),
  daysOnMarket INT,
  numberOfRooms INT,
  exterior VARCHAR(144),
  pricePerSqft INT,
  yearBuilt INT,
  parkingSpaces INT,
  floors VARCHAR(144),
  roof VARCHAR(144),
  mlsSourceId INT
);

CREATE TABLE IF NOT EXISTS priceHistory (
  date Date,
  price INT,
  event VARCHAR(144)
);

COPY homeInfo(id, address, fullAddress, beds, baths, sqft, price, mortgageEst, boxIcon)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homeInfo.csv'
DELIMITER ','
CSV HEADER;

COPY mapView(image, text)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homemaps.csv'
DELIMITER ','
CSV HEADER;

COPY streetView(image, text)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homestreets.csv'
DELIMITER ','
CSV HEADER;

COPY schools(image, text)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homeschools.csv'
DELIMITER ','
CSV HEADER;

COPY commute(image, text)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homecommutes.csv'
DELIMITER ','
CSV HEADER;

COPY listingAgent(listingAgent)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homeagents.csv'
DELIMITER ','
CSV HEADER;

COPY descriptionText(descriptionText)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homedescriptions.csv'
DELIMITER ','
CSV HEADER;

COPY homeDetails(heating, propertyType, coolingSystem, daysOnMarket, numberOfRooms, exterior, pricePerSqft, yearBuilt, parkingSpaces, floors, roof, mlsSourceId)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homeDetails.csv'
DELIMITER ','
CSV HEADER;

COPY priceHistory(date, price, event)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homeprices.csv'
DELIMITER ','
CSV HEADER;