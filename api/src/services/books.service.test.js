const BooksService = require('./books.service');

const BOOK_TITLE = 'El señor de los anillos';

const fakeBooks = [
  {
    _id: 123143,
    title: BOOK_TITLE,
  },
];

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
      mockGetAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks({});

      // console.log(books);
      expect(books).toBeTruthy();
      expect(books.length).toEqual(1);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('should return an title book', async () => {
      const TITLE = 'The zombies';
      mockGetAll.mockResolvedValue([
        {
          _id: 123143,
          title: TITLE,
        },
      ]);
      const books = await service.getBooks({});

      expect(books).toBeTruthy();
      expect(books[0].title).toEqual(TITLE);
    });
  });
});
