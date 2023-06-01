import { describe, test, expect } from 'vitest';
import { handleCreateUpdateMultiLanguagesFields } from '../utils/handlers';
import { Product } from '../types/prestashop.type';

describe('Handlers', async () => {
  test('Should transforme mul', () => {
    const result = handleCreateUpdateMultiLanguagesFields<Partial<Product>>({
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
