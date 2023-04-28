import nock from 'nock';
import { Product } from '../types/prestashop.type';
import { init } from '../config';

const MOCK_URL = 'http://localhost';
const MOCK_API_KEY = 'api_key';

export const mockProducts: Product[] = Array(50)
  .fill(undefined)
  .map((_, i) => ({
    id: (i + 1).toString(),
    id_manufacturer: (i + 1).toString(),
    id_supplier: (i + 1).toString(),
    id_category_default: '0',
    new: null,
    cache_default_attribute: '0',
    id_default_image: '',
    id_default_combination: 0,
    id_tax_rules_group: '0',
    position_in_category: '',
    manufacturer_name: false,
    quantity: '0',
    type: 'simple',
    id_shop_default: '1',
    reference: `reference-${i + 1}`,
    supplier_reference: '',
    location: '',
    width: '0.000000',
    height: '0.000000',
    depth: '0.000000',
    weight: '0.000000',
    quantity_discount: '0',
    ean13: '',
    isbn: '',
    upc: '',
    mpn: '',
    cache_is_pack: '0',
    cache_has_attachments: '0',
    is_virtual: '0',
    state: '1',
    additional_delivery_times: '0',
    delivery_in_stock: [
      {
        id: '1',
        value: '',
      },
    ],
    delivery_out_stock: [
      {
        id: '1',
        value: '',
      },
    ],
    product_type: '',
    on_sale: '0',
    online_only: '0',
    ecotax: '0.000000',
    minimal_quantity: '1',
    low_stock_threshold: null,
    low_stock_alert: '0',
    price: '120.000000',
    wholesale_price: '100.000000',
    unity: '',
    unit_price_ratio: '1.000000',
    additional_shipping_cost: '0.000000',
    customizable: '0',
    text_fields: '0',
    uploadable_files: '0',
    active: '1',
    redirect_type: 'category',
    id_type_redirected: '0',
    available_for_order: '1',
    available_date: '2023-04-28',
    show_condition: '0',
    condition: 'new',
    show_price: '1',
    indexed: '1',
    visibility: 'both',
    advanced_stock_management: '0',
    date_add: '2023-04-28 09:00:00',
    date_upd: '2023-04-28 09:01:00',
    pack_stock_type: '0',
    meta_description: [
      {
        id: '1',
        value: '',
      },
    ],
    meta_keywords: [
      {
        id: '1',
        value: '',
      },
    ],
    meta_title: [
      {
        id: '1',
        value: 'meta-title',
      },
    ],
    link_rewrite: [
      {
        id: '1',
        value: 'link-orange',
      },
    ],
    name: [
      {
        id: '1',
        value: 'orange',
      },
    ],
    description: [
      {
        id: '1',
        value: '',
      },
    ],
    description_short: [
      {
        id: '1',
        value: '',
      },
    ],
    available_now: [
      {
        id: '1',
        value: '',
      },
    ],
    available_later: [
      {
        id: '1',
        value: '',
      },
    ],
    associations: {
      categories: [
        {
          id: '1',
        },
      ],
      product_features: [
        {
          id: '1',
          id_feature_value: '1',
        },
      ],
      stock_availables: [
        {
          id: '1',
          id_product_attribute: '0',
        },
      ],
    },
  }));

export const mockProductsOnlyID = mockProducts.map((item) => ({
  id: item.id,
}));

export const mockHTTPCalls = () => {
  init(MOCK_URL, MOCK_API_KEY);

  nock(MOCK_URL)
    .get('/api/products')
    .query({ ws_key: MOCK_API_KEY, output_format: 'JSON', display: '[id]' })
    .reply(200, { products: mockProductsOnlyID })
    .get('/api/products')
    .query({ ws_key: MOCK_API_KEY, output_format: 'JSON', display: 'full' })
    .reply(200, { products: mockProducts });
};
