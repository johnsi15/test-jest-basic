const BooksService = require('./books.service');

const BOOK_TITLE = 'El señor de los anillos';

const fakeBooks = [
  {
    _id: 123143,
    title: BOOK_TITLE,
  },
];

const MongoLibStub = {
  getAll: () => fakeBooks,
  create: () => {},
};

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return an array of books', async () => {
      const books = await service.getBooks({});

      // console.log(books);
      expect(books).toBeTruthy();
      expect(books.length).toEqual(1);
    });

    test('should return an title book', async () => {
      const books = await service.getBooks({});

      expect(books).toBeTruthy();
      expect(books[0].title).toEqual(BOOK_TITLE);
    });
  });
});
