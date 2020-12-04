const path = require('path');
const fs = require('fs');

const { writeCSV } = require('./writer.js');
const { homeInfodata, detailsdata, pricedata, mapdata, streetdata, commutedata, descriptiondata, agentdata, schooldata } = require('./randomizeData.js');

// HOMEINFODATA
console.log('START CSV');
console.time();

const homeinfoLines = 100000;
const homeinfoFile = path.join(__dirname, '/homeInfo.csv');
const homeinfoStream = fs.createWriteStream(homeinfoFile);
homeinfoStream.write('utf-8');
writeCSV(homeinfoStream, homeinfoLines, homeInfodata, 'utf-8', () => { homeinfoStream.end(); });

// HOMEDETAILS
const detailines = 100000;
const detailFile = path.join(__dirname, '/homeDetails.csv');
const detailStream = fs.createWriteStream(detailFile);
detailStream.write('utf-8');
writeCSV(detailStream, detailines, detailsdata, 'utf-8', () => { detailStream.end(); });

// DISCRIPTIONDATA
const descriptionlines = 100000;
const descriptionFile = path.join(__dirname, '/homedescriptions.csv');
const descriptionStream = fs.createWriteStream(descriptionFile);
descriptionStream.write('utf-8');
writeCSV(descriptionStream, descriptionlines, descriptiondata, 'utf-8', () => { descriptionStream.end(); });

// PRICEDATA
const pricelines = 100000;
const priceFile = path.join(__dirname, '/homeprices.csv');
const priceStream = fs.createWriteStream(priceFile);
priceStream.write('utf-8');
writeCSV(priceStream, pricelines, pricedata, 'utf-8', () => { priceStream.end(); });

// MAPDATA
const maplines = 1;
const mapFile = path.join(__dirname, '/homemaps.csv');
const mapStream = fs.createWriteStream(mapFile);
mapStream.write('utf-8');
writeCSV(mapStream, maplines, mapdata, 'utf-8', () => { mapStream.end(); });

// STREETDATA
const streetlines = 1;
const streetFile = path.join(__dirname, '/homestreets.csv');
const streetStream = fs.createWriteStream(streetFile);
streetStream.write('utf-8');
writeCSV(streetStream, streetlines, streetdata, 'utf-8', () => { streetStream.end(); });

// COMMUTEDATA
const commutelines = 20000;
const commuteFile = path.join(__dirname, '/homecommutes.csv');
const commuteStream = fs.createWriteStream(commuteFile);
commuteStream.write('utf-8');
writeCSV(commuteStream, commutelines, commutedata, 'utf-8', () => { commuteStream.end(); });

// SCHOOLDATA
const schoollines = 1;
const schoolFile = path.join(__dirname, '/homeschools.csv');
const schoolStream = fs.createWriteStream(schoolFile);
schoolStream.write('utf-8');
writeCSV(schoolStream, schoollines, schooldata, 'utf-8', () => { schoolStream.end(); });

// AGENTDATA
const agentlines = 20000;
const agentFile = path.join(__dirname, '/homeagents.csv');
const agentStream = fs.createWriteStream(agentFile);
agentStream.write('utf-8');
writeCSV(agentStream, agentlines, agentdata, 'utf-8', () => { agentStream.end(); });

console.log('FINISH CSV');
console.timeEnd();
