import { describe, test, expect, beforeEach } from 'vitest';
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
  MockCustomProduct,
} from './mocks';

describe('Base', async () => {
  const products = new Base<Product>(Endpoint.products);

  beforeEach(() => {
    mockHTTPCalls();
  });

  test('Should have list, get, create and update properties', () => {
    expect(products).toHaveProperty('list');
    expect(products).toHaveProperty('find');
    expect(products).toHaveProperty('get');
    expect(products).toHaveProperty('create');
    expect(products).toHaveProperty('update');
  });

  describe('list', () => {
    test('Should kick endpoint key', async () => {
      const { data } = await products.list();

      expect(data).not.toHaveProperty(Endpoint.products);
    });

    test('Should list all products with all properties', async () => {
      const { data } = await products.list();

      expect(data).not.toHaveProperty(Endpoint.products);
      expect(data).toStrictEqual(mockProducts);
    });

    test('Should list all products id', async () => {
      const { data } = await products.list({ display: ['id'] });

      expect(data).toStrictEqual(mockProductsOnlyID);
    });

    test('Should filter on id', async () => {
      const { data } = await products.list({
        filters: [{ key: 'id', value: 1 }],
      });

      expect(data).toStrictEqual(mockProductsOnlyIDEquals1);
    });

    test('Should filter on name containing "ora"', async () => {
      const { data } = await products.list({
        filters: [{ key: 'name', value: 'ora', operator: 'contains' }],
      });

      expect(data).toStrictEqual(mockProductsOnlyNameContainsOra);
    });

    test('Should sort by id DESC', async () => {
      const { data } = await products.list({
        sort: ['id_DESC'],
      });

      expect(data).toStrictEqual(mockProductsIdDesc);
    });

    test('Should limit to 10 items', async () => {
      const { data } = await products.list({
        limit: 10,
      });

      expect(data?.length).toStrictEqual(10);
    });

    describe('custom type', () => {
      test('Should accept custom filters', async () => {
        const response = await products.list<MockCustomProduct>({
          filters: [{ key: 'custom_key', value: 'my_value' }],
        });

        expect(response.data).not.toBe(undefined);
      });
    });
  });

  describe('find', () => {
    test('Should kick endpoint key', async () => {
      const { data } = await products.find();

      expect(data).not.toHaveProperty(Endpoint.products);
    });

    test('Should return first item from the list of products', async () => {
      const { data } = await products.find();

      expect(data?.id).toStrictEqual(mockProducts[0].id);
    });
  });

  describe('get', () => {
    test('Should kick endpoint key', async () => {
      const { data } = await products.create({ name: 'orange2' });

      expect(data).not.toHaveProperty(Endpoint.products);
    });
  });

  describe('create', () => {
    test('Should kick endpoint key', async () => {
      const { data } = await products.update(1, { id: 1, name: 'name' });

      expect(data).not.toHaveProperty(Endpoint.products);
    });
  });

  describe('update', () => {
    test('Should kick endpoint key', async () => {
      const { data } = await products.get(1);

      expect(data).not.toHaveProperty(Endpoint.products);
    });
  });
});
