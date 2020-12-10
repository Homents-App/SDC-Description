const path = require('path');
const fs = require('fs');

const { writeCSV } = require('./writer.js');
const { homeInfodata, detailsdata, pricedata, descriptiondata, agentdata } = require('./randomizeData.js');

// HOMEINFODATA
console.log('START CSV');
console.time();

const homeinfoLines = 10000000;
const homeinfoFile = path.join(__dirname, '/homeInfo.csv');
const homeinfoStream = fs.createWriteStream(homeinfoFile);
writeCSV(homeinfoStream, homeinfoLines, homeInfodata, 'utf-8', () => { homeinfoStream.end(); });

// HOMEDETAILS
const detailines = 10000000;
const detailFile = path.join(__dirname, '/homeDetails.csv');
const detailStream = fs.createWriteStream(detailFile);
writeCSV(detailStream, detailines, detailsdata, 'utf-8', () => { detailStream.end(); });

// DISCRIPTIONDATA
const descriptionlines = 10000000;
const descriptionFile = path.join(__dirname, '/homedescriptions.csv');
const descriptionStream = fs.createWriteStream(descriptionFile);
descriptionStream.write('utf-8');
writeCSV(descriptionStream, descriptionlines, descriptiondata, 'utf-8', () => { descriptionStream.end(); });

// PRICEDATA
const pricelines = 10000000;
const priceFile = path.join(__dirname, '/homeprices.csv');
const priceStream = fs.createWriteStream(priceFile);
writeCSV(priceStream, pricelines, pricedata, 'utf-8', () => { priceStream.end(); });

// AGENTDATA
const agentlines = 200000;
const agentFile = path.join(__dirname, '/homeagents.csv');
const agentStream = fs.createWriteStream(agentFile);
writeCSV(agentStream, agentlines, agentdata, 'utf-8', () => { agentStream.end(); });

console.log('FINISH CSV');
console.timeEnd();
