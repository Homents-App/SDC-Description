const express = require('express');
const bodyParser = require('body-parser');
const { getHome, newHome, removeHome, getDescrip, getPrice, getDetail, getAgent } = require('./database/Post/models.js');

const app = express();

app.use(express.static(`${__dirname}/../client/public`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/home-info/:id', (req, res) => {
  getHome(req.params.id)
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
});
// app.get('/api/home-map/:id', (req, res) => {
//   getMap(req.params.id)
//     .then((data) => {
//       res.status(200);
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(404);
//       res.send(err);
//     });
// });
// app.get('/api/home-street/:id', (req, res) => {
//   getStreet(req.params.id)
//     .then((data) => {
//       res.status(200);
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(404);
//       res.send(err);
//     });
// });
// app.get('/api/home-school/:id', (req, res) => {
//   getSchool(req.params.id)
//     .then((data) => {
//       res.status(200);
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(404);
//       res.send(err);
//     });
// });
// app.get('/api/home-comm/:id', (req, res) => {
//   getComm(req.params.id)
//     .then((data) => {
//       res.status(200);
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(404);
//       res.send(err);
//     });
// });
app.get('/api/home-agent/:id', (req, res) => {
  getAgent(req.params.id)
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
});
app.get('/api/home-detail/:id', (req, res) => {
  getDetail(req.params.id)
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
});
app.get('/api/home-price/:id', (req, res) => {
  getPrice(req.params.id)
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
});
app.get('/api/home-descrip/:id', (req, res) => {
  getDescrip(req.params.id)
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
});

// POST
app.post('/api/home-info/:id', (req, res) => {
  newHome(req.params)
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
});

// DELETE
app.post('/api/home-info/:id', (req, res) => {
  removeHome(req.params.id)
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      res.status(404);
      res.send(err);
    });
});
module.exports = app;
