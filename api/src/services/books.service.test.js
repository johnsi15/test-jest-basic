const { generateManyBooks } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn(); // mock or spy

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('should return an array of books', async () => {
      const fakeBooks = generateManyBooks(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks({});

      // console.log(books);
      expect(books).toBeTruthy();
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return an title book', async () => {
      const fakeBooks = generateManyBooks(5);
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks({});

      expect(books).toBeTruthy();
      expect(books[0].title).toEqual(fakeBooks[0].title);
    });
  });
});
