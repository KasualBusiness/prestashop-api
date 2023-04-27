import { describe, test, expect } from 'vitest';
import { Product } from '..';
import { Base } from './base.class';
import { Endpoint } from '../enums/endpoint.enum';

describe('Base', async () => {
  test('Should have getAll, get, create and update properties', () => {
    const products = new Base<Product>(Endpoint.products);

    expect(products).toHaveProperty('getAll');
    expect(products).toHaveProperty('get');
    expect(products).toHaveProperty('create');
    expect(products).toHaveProperty('update');
  });
});
