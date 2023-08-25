const request = require('supertest');

const mockGetAll = jest.fn(); // mock or spy <- debe estar definida antes del createApp
const createApp = require('../src/app');
const { generateManyBooks } = require('../src/fakes/book.fake');

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for books endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3003);
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /api/v1/books', () => {
    test('should return a list books', async () => {
      const fakeBooks = generateManyBooks(5);
      mockGetAll.mockResolvedValue(fakeBooks);

      const { body, statusCode } = await request(app).get('/api/v1/books');
      // console.log('response', response);
      console.log(body);
      expect(statusCode).toBe(200);
      expect(body.length).toEqual(fakeBooks.length);
    });
  });
});
