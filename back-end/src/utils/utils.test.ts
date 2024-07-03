import { describe, expect, test } from '@jest/globals';
import {
  filterResponseByAlbumId,
  filterResponseBySearchText,
  paginateResponse,
} from './utils';

describe('testing utils functions', () => {
  describe('testing filterResponseBySearchText', () => {
    const testData = [
      { title: 'super test title' },
      { title: 'wonderful title' },
      { title: 'meh title' },
      { title: 'do not like this title' },
      { title: 'test title' },
      { title: 'amazing title' },
    ];
    test('testing filterResponseBySearchText and finding data', () => {
      const filteredData = filterResponseBySearchText(testData, 'super test');
      const moreFilteredData = filterResponseBySearchText(testData, 'title');

      expect(filteredData.length).toBe(1);
      expect(filteredData[0]).toStrictEqual({ title: 'super test title' });

      expect(moreFilteredData.length).toBe(testData.length);
    });

    test('testing filterResponseBySearchText and not finding data', () => {
      const filteredData = filterResponseBySearchText(testData, 'no data');

      expect(filteredData.length).toBe(0);
      expect(filteredData).toStrictEqual([]);
    });

    test('testing filterResponseBySearchText with empty original data', () => {
      const filteredData = filterResponseBySearchText([], 'super');

      expect(filteredData.length).toBe(0);
      expect(filteredData).toStrictEqual([]);
    });
    test('testing filterResponseBySearchText with empty searchtext', () => {
      const filteredData = filterResponseBySearchText(testData, '');

      expect(filteredData.length).toBe(testData.length);
      expect(filteredData).toStrictEqual(testData);
    });
  });

  describe('testing filterResponseByAlbumId', () => {
    const testData = [
      { albumId: 2 },
      { albumId: 2 },
      { albumId: 1 },
      { albumId: 3 },
      { albumId: 4 },
      { albumId: 5 },
    ];
    test('testing filterResponseBySearchText and finding data', () => {
      const filteredData = filterResponseByAlbumId(testData, 2);
      const moreFilteredData = filterResponseByAlbumId(testData, 7);

      expect(filteredData.length).toBe(2);
      expect(filteredData[0]).toStrictEqual({ albumId: 2 });

      expect(moreFilteredData.length).toBe(0);
    });
    test('testing filterResponseBySearchText with empty original array', () => {
      const filteredData = filterResponseByAlbumId([], 2);

      expect(filteredData.length).toBe(0);
    });
    test('testing filterResponseBySearchText with invalid albumid', () => {
      const filteredData = filterResponseByAlbumId(testData, -1);

      expect(filteredData.length).toBe(testData.length);
    });
  });

  describe('testing paginateResponse', () => {
    const testData = [
      { albumId: 2 },
      { albumId: 2 },
      { albumId: 1 },
      { albumId: 3 },
      { albumId: 4 },
      { albumId: 5 },
    ];
    test('testing paginateResponse and finding data', () => {
      const filteredData = paginateResponse(testData, 2);
      const moreFilteredData = paginateResponse(testData, 7);
      const evenmoreFilteredData = paginateResponse(testData, 2, 3);

      expect(filteredData.length).toBe(4);
      expect(filteredData[0]).toStrictEqual({ albumId: 1 });

      expect(moreFilteredData.length).toBe(6);
      expect(evenmoreFilteredData.length).toBe(3);
    });
    test('testing paginateResponse with empty original array', () => {
      const filteredData = paginateResponse([], 2);

      expect(filteredData.length).toBe(0);
    });
    test('testing paginateResponse with invalid skip and invalid limit', () => {
      const filteredData = paginateResponse(testData, -1);
      const morefilteredData = paginateResponse(testData, -1, -1);

      expect(filteredData.length).toBe(testData.length);
      expect(morefilteredData.length).toBe(testData.length);
    });
  });
});
