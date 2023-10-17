import { describe, test, expect } from 'vitest';
import { ListParams, Product } from '..';
import { generateListURLSearchParams } from '../utils/calls';

describe('Calls', async () => {
  describe('List', () => {
    let params: ListParams<Product> = {};

    describe('display', () => {
      test('Should default to display full', () => {
        const searchParams = generateListURLSearchParams(params);

        expect(searchParams).toStrictEqual(
          new URLSearchParams({ display: 'full' })
        );
      });

      test('Should only contains display full', () => {
        params = { display: ['id', 'name'] };

        const searchParams = generateListURLSearchParams(params);

        expect(searchParams).toStrictEqual(
          new URLSearchParams({ display: '[id,name]' })
        );
      });
    });

    describe('limit', () => {
      test('Should not have limit by default', () => {
        const searchParams = generateListURLSearchParams(params);

        expect(searchParams.get('limit')).toBeNull();
      });

      test('Should have limit as one', () => {
        params = { limit: 1 };

        const searchParams = generateListURLSearchParams(params);

        expect(searchParams.get('limit')).toStrictEqual('1');
      });
    });

    describe('filters', () => {
      test('Should not have filters by default', () => {
        const searchParams = generateListURLSearchParams(params);

        expect(searchParams.get('filters')).toBeNull();
      });

      test('Should have one filter on id with value as 1', () => {
        params = { filters: [{ key: 'id', value: 1 }] };

        const searchParams = generateListURLSearchParams(params);

        expect(searchParams.get('filter[id]')).toStrictEqual('[1]');
      });

      test('Should have two filters on id with value as 1 and 2', () => {
        params = {
          filters: [
            { key: 'id', value: 1 },
            { key: 'id', value: 2 }
          ]
        };

        const searchParams = generateListURLSearchParams(params);

        expect(searchParams.get('filter[id]')).toStrictEqual('[1|2]');
      });

      test('Should not append operator if multiple filters with the same key', () => {
        params = {
          filters: [
            { key: 'name', value: 'My', operator: 'start' },
            { key: 'name', value: 'Name', operator: 'contains' }
          ]
        };

        const searchParams = generateListURLSearchParams(params);

        expect(searchParams.get('filter[name]')).toStrictEqual('[My|Name]');
      });

      test('Should append operator if two filters with different keys', () => {
        params = {
          filters: [
            { key: 'name', value: 'Name', operator: 'contains' },
            { key: 'location', value: 'City', operator: 'contains' }
          ]
        };

        const searchParams = generateListURLSearchParams(params);

        expect(searchParams.get('filter[name]')).toStrictEqual('%[Name]%');
        expect(searchParams.get('filter[location]')).toStrictEqual('%[City]%');
      });

      test('Should append operator if only one filter', () => {
        params = {
          filters: [{ key: 'name', value: 'Name', operator: 'contains' }]
        };

        const searchParams = generateListURLSearchParams(params);

        expect(searchParams.get('filter[name]')).toStrictEqual('%[Name]%');
      });
    });

    describe('sort', () => {
      test('Should not have sort by default', () => {
        const searchParams = generateListURLSearchParams(params);

        expect(searchParams.get('sort')).toBeNull();
      });

      test('Should sort on id_ASC', () => {
        params = { sort: ['id_ASC'] };
        const searchParams = generateListURLSearchParams(params);

        expect(searchParams.get('sort')).toStrictEqual('[id_ASC]');
      });
    });
  });
});
