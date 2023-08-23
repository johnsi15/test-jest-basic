const request = require('supertest');
const createApp = require('../src/app');

describe('Test for hello endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET]/', () => {
    test('should return "Hello World!', async () => {
      const response = await request(app).get('/');
      // console.log('response', response);
      expect(response.statusCode).toBe(200);
      expect(response.type).toEqual('text/html');
      expect(response.text).toEqual('Hello World!');
    });
  });
});
