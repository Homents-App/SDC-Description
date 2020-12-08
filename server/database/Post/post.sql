DROP DATABASE IF EXISTS HomeSchema;
CREATE DATABASE HomeSchema;

CREATE TABLE IF NOT EXISTS homeInfo (
  id SERIAL PRIMARY KEY,
  address VARCHAR(255),
  fullAddress VARCHAR(255),
  beds INT,
  baths INT,
  sqft INT,
  price INT,
  mortgageEst NUMERIC,
  boxIcon VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS mapView ( id SERIAL PRIMARY KEY, img VARCHAR(255), descrip VARCHAR(255) );
CREATE TABLE IF NOT EXISTS streetView ( id SERIAL PRIMARY KEY, img VARCHAR(255), descrip VARCHAR(255) );
CREATE TABLE IF NOT EXISTS schools ( id SERIAL PRIMARY KEY, img VARCHAR(255), descrip VARCHAR(255) );
CREATE TABLE IF NOT EXISTS commute ( id SERIAL PRIMARY KEY, img VARCHAR(255), descrip VARCHAR(255) );
CREATE TABLE IF NOT EXISTS listingAgent( id SERIAL PRIMARY KEY, listingAgent VARCHAR(255) );
CREATE TABLE IF NOT EXISTS descriptionText( id SERIAL PRIMARY KEY, descriptiontext text );

CREATE TABLE IF NOT EXISTS homeDetails (
  id SERIAL PRIMARY KEY,
  heating VARCHAR(255),
  propertyType VARCHAR(255),
  coolingSystem VARCHAR(255),
  daysOnMarket INT,
  numberOfRooms INT,
  exterior VARCHAR(255),
  pricePerSqft INT,
  yearBuilt INT,
  parkingSpaces INT,
  floors VARCHAR(255),
  roof VARCHAR(255),
  mlsSourceId INT
);

CREATE TABLE IF NOT EXISTS priceHistory (
  id SERIAL PRIMARY KEY,
  date VARCHAR(255),
  price INT,
  event VARCHAR(255)
);

COPY homeInfo(address, fullAddress, beds, baths, sqft, price, mortgageEst, boxIcon)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homeInfo.csv'
DELIMITER '>'
CSV HEADER;

COPY mapView(img, descrip)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homemaps.csv'
DELIMITER '>'
CSV HEADER;

COPY streetView(img, descrip)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homestreets.csv'
DELIMITER ','
CSV HEADER;

COPY schools(img, descrip)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homeschools.csv'
DELIMITER ','
CSV HEADER;

COPY commute(img, descrip)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homecommutes.csv'
DELIMITER ','
CSV HEADER;

COPY listingAgent(listingAgent)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homeagents.csv'
DELIMITER ','
CSV HEADER;

COPY descriptionText(descriptiontext)
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

