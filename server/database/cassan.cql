CREATE  KEYSPACE IF NOT EXISTS HomeSchema WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE HomeSchema;

CREATE TABLE IF NOT EXISTS homeInfo (
  id UUID PRIMARY KEY,
  address varchar,
  fullAddress varchar,
  beds int,
  baths int,
  sqft int,
  price int,
  mortgageEst decimal,
  boxIcon varchar
);

CREATE TABLE IF NOT EXISTS mapView ( id UUID PRIMARY KEY, img varchar, descrip varchar );
CREATE TABLE IF NOT EXISTS streetView ( id UUID PRIMARY KEY, img varchar, descrip varchar );
CREATE TABLE IF NOT EXISTS schools ( id UUID PRIMARY KEY, img varchar, descrip varchar );
CREATE TABLE IF NOT EXISTS commute ( id UUID PRIMARY KEY, img varchar, descrip varchar );
CREATE TABLE IF NOT EXISTS listingAgent( id UUID PRIMARY KEY, listingAgent varchar );
CREATE TABLE IF NOT EXISTS descriptionText( id UUID PRIMARY KEY, descriptiontext text );

CREATE TABLE IF NOT EXISTS homeDetails (
  id UUID PRIMARY KEY,
  heating varchar,
  propertyType varchar,
  coolingSystem varchar,
  daysOnMarket int,
  numberOfRooms int,
  exterior varchar,
  pricePerSqft int,
  yearBuilt int,
  parkingSpaces int,
  floors varchar,
  roof varchar,
  mlsSourceId int
);

CREATE TABLE IF NOT EXISTS priceHistory (
  id UUID PRIMARY KEY,
  date varchar,
  price int,
  event varchar
);


COPY homeInfo(id, address, fullAddress, beds, baths, sqft, price, mortgageEst, boxIcon)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homeInfo.csv'
WITH DELIMITER = '>';

COPY mapView(id, img, descrip)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homemaps.csv'
WITH DELIMITER = '>';

COPY streetView(id, img, descrip)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homestreets.csv'
WITH DELIMITER = ',';

COPY schools(id, img, descrip)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homeschools.csv'
WITH DELIMITER = ',';

COPY commute(id, img, descrip)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homecommutes.csv'
WITH DELIMITER = ',';

COPY listingAgent(id, listingAgent)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homeagents.csv'
WITH DELIMITER = ',';

COPY descriptionText(id, descriptiontext)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homedescriptions.csv'
WITH DELIMITER = ',';

COPY homeDetails(id, heating, propertyType, coolingSystem, daysOnMarket, numberOfRooms, exterior, pricePerSqft, yearBuilt, parkingSpaces, floors, roof, mlsSourceId)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homeDetails.csv'
WITH DELIMITER = ',';

COPY priceHistory(id, date, price, event)
FROM '/Users/john/Desktop/Hack/SDC/description/server/csv/homeprices.csv'
WITH DELIMITER = ',';
