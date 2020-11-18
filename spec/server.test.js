const supertest = require('supertest');
const mongoose = require('mongoose');
const app = require('../server/app.js');
const {Home, db} = require('../database/index.js');
const request = supertest(app);


describe('insert', () => {

  beforeAll(async() => {
    const url = 'mongodb://localhost/description_module'
    await mongoose.connect('mongodb://localhost/description_module', {
      useNewUrlParser:true,
      useUnifiedTopology: true
    });
  });

  //using an environment variable for testing
  test("Should failed when env not test ", () => {
    expect(process.env.NODE_ENV).toEqual("test");
  });

  test("Should respond with a 200 to api get request if valid", async(done) => {
    const res = await request.get('/');
    expect(res.statusCode).toEqual(200);
    done();
  });

  test("Should respond with a 201 to api endpoint get request if valid", async(done) => {
    const res = await request.get('/api/home-description');
    expect(res.statusCode).toEqual(201);
    done();
  });

  test("Should respond with a 404 to api endpoint get request if invalid", async(done) => {
    const res = await request.get('/api/home-discriptions');
    expect(res.status).toEqual(404);
    done();
  })

  test("Should respond with an array of 2 homes-description listings", async(done) => {
    const response = await Home.find({});
    expect(response.length).toEqual(2);
    done();
  })

  afterAll(async() => {
    await db.close();

  });
})
