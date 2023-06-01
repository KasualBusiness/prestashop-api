import { describe, test, expect } from 'vitest';
import { handleCreateUpdateMultilanguagesFields } from '../utils/handlers';
import { Product } from '../types/prestashop.type';

describe('Calls', async () => {
  describe('List', () => {
    test('Should default to display full', () => {
      const result = handleCreateUpdateMultilanguagesFields<Partial<Product>>({
        id: 1,
        name: [
          { id: '1', value: 'My Name 1' },
          { id: '2', value: 'My Name 2' },
        ],
      });

      expect(result).toStrictEqual({
        id: 1,
        name: {
          language: [
            { '@id': 1, '#text': 'My Name 1' },
            { '@id': 2, '#text': 'My Name 2' },
          ],
        },
      });
    });
  });
});
