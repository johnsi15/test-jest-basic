const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { generateManyBooks } = require('../src/fakes/book.fake');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books endpoint', () => {
  let app = null;
  let server = null;
  let database = null;
  const collection = 'books';

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3002);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(async () => {
    await server.close();
    await database.collection(collection).drop();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list books', async () => {
      const fakeBooks = generateManyBooks(3);
      const seedData = await database.collection(collection).insertMany(fakeBooks);
      // console.log(seedData);
      const { body, statusCode } = await request(app).get('/api/v1/books');
      // console.log('response', response);
      console.log(body);
      expect(statusCode).toBe(200);
      expect(body.length).toEqual(seedData.insertedCount);
    });
  });
});
