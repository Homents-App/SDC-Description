const app = require('./app.js');
require('newrelic');

const port = 3004;

app.listen(port, () => console.log(`Descriptions Module is listening at http://localhost:${port}`));
