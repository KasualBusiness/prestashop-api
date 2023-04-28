import { describe, test, expect, beforeAll } from 'vitest';
import { Product } from '..';
import { Base } from '../classes/base.class';
import { Endpoint } from '../enums/endpoint.enum';
import {
  mockProducts,
  mockHTTPCalls,
  mockProductsOnlyID,
  mockProductsOnlyIDEquals1,
  mockProductsOnlyNameContainsOra,
  mockProductsIdDesc,
} from './mocks';

describe('Base', async () => {
  beforeAll(() => {
    mockHTTPCalls();
  });

  describe('getAll', () => {
    test('Should have getAll, get, create and update properties', () => {
      const products = new Base<Product>(Endpoint.products);

      expect(products).toHaveProperty('getAll');
      expect(products).toHaveProperty('get');
      expect(products).toHaveProperty('create');
      expect(products).toHaveProperty('update');
    });

    test('Should list all products with all properties', async () => {
      const products = new Base<Product>(Endpoint.products);
      const { data } = await products.getAll();

      expect(data).toStrictEqual(mockProducts);
    });

    test('Should list all products id', async () => {
      const products = new Base<Product>(Endpoint.products);
      const { data } = await products.getAll({ display: ['id'] });

      expect(data).toStrictEqual(mockProductsOnlyID);
    });

    test('Should filter on id', async () => {
      const products = new Base<Product>(Endpoint.products);
      const { data } = await products.getAll({
        filters: [{ key: 'id', value: 1 }],
      });

      expect(data).toStrictEqual(mockProductsOnlyIDEquals1);
    });

    test('Should filter on name containing "ora"', async () => {
      const products = new Base<Product>(Endpoint.products);
      const { data } = await products.getAll({
        filters: [{ key: 'name', value: 'ora', operator: 'contains' }],
      });

      expect(data).toStrictEqual(mockProductsOnlyNameContainsOra);
    });

    test('Should sort by id DESC', async () => {
      const products = new Base<Product>(Endpoint.products);
      const { data } = await products.getAll({
        sort: ['id_DESC'],
      });

      expect(data).toStrictEqual(mockProductsIdDesc);
    });

    test('Should limit to 10 items', async () => {
      const products = new Base<Product>(Endpoint.products);
      const { data } = await products.getAll({
        limit: 10,
      });

      expect(data?.length).toStrictEqual(10);
    });
  });
});
