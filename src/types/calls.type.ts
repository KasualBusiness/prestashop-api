import type {
  Method,
  ParamsSerializerOptions,
  RawAxiosRequestHeaders,
  ResponseType
} from 'axios';
import {
  Category,
  Customer,
  Product,
  Stock,
  StockMovement
} from './prestashop.type';
import { Endpoint } from '../enums/endpoint.enum';

export type CallParams = {
  method: Method;
  path: string;
  params?: Record<string, unknown>;
  body?: unknown | undefined;
  headers?: Partial<RawAxiosRequestHeaders>;
  paramsSerializer?: ParamsSerializerOptions;
  responseType?: ResponseType;
};

export type PrestashopAPIResponse<T> = {
  data: T | undefined;
  errors: unknown[] | undefined;
};

export type PrestashopErrorResponse<T> = {
  [key in Endpoint]: T;
} & {
  errors: unknown[];
};

export type PrestashopAPIDeleteResponse = {
  success: boolean;
  errors: unknown[] | undefined;
};

export type LoginResponse = {
  success: boolean;
  customer?: Partial<Customer>;
};

export type SearchParams = {
  value: string;
  languageId: string | number;
};

export type SearchResponse = {
  products?: Partial<Product>[];
  categories?: Partial<Category>[];
  errors?: unknown[];
};

export type StockMovementsResponse = {
  stock_movements?: StockMovement[];
  errors?: unknown[];
};

export type StocksResponse = {
  stocks?: Stock[];
  errors?: unknown[];
};
