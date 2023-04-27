import { Method, ParamsSerializerOptions, RawAxiosRequestHeaders } from 'axios';
import { Customer } from './prestashop.type';
import { Endpoint } from '../enums/endpoint.enum';

export type CallParams = {
  method: Method;
  path: string;
  params?: Record<string, unknown>;
  body?: unknown | undefined;
  headers?: Partial<RawAxiosRequestHeaders>;
  paramsSerializer?: ParamsSerializerOptions;
};

export type LoginResponse = {
  success: boolean;
  customer?: Partial<Customer>;
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
