import { isAxiosError } from 'axios';
import { create } from 'xmlbuilder2';
import {
  Filter,
  GetAllParams,
  GetParams,
  PostParams,
  PutParams,
} from '../types/global.type';
import { call } from '../';
import qs from 'qs';
import { Endpoint } from '../enums/endpoint.enum';
import { PrestashopAPIResponse } from '../types/calls.type';

/**
 * Generate url SearchParams.
 *
 * @param params
 * @returns
 */
export const generateURLSearchParams = (
  params: GetAllParams | GetParams | PostParams | PutParams | undefined
): URLSearchParams => {
  const searchParams = new URLSearchParams();

  /** Display params */
  if (params && Array.isArray(params.display)) {
    searchParams.set('display', `[${params.display.join(',')}]`);
  } else if (params && !Array.isArray(params.display)) {
    searchParams.set('display', params.display || 'full');
  } else {
    searchParams.set('display', 'full');
  }

  return searchParams;
};

/**
 * Format display, limit, skip, filters and sort into
 * a URLSearchParams that will be usable by prestashop's
 * web services.
 *
 * @param params
 * @returns
 */
export const generateGetAllURLSearchParams = (
  params: GetAllParams
): URLSearchParams => {
  const searchParams = generateURLSearchParams(params);

  /** Limit */
  if (params.limit && params.skip) {
    searchParams.set('limit', `${params.skip},${params.limit}`);
  } else if (params.limit) {
    searchParams.set('limit', params.limit.toString());
  }

  /** Filters */
  if (params.filters) {
    params.filters.forEach((filter: Filter, i: number) => {
      const key = `filter[${filter.key}]`;
      const hasMultipleFiltersWithTheSameKey =
        (params.filters?.filter((item) => item.key === filter.key) || [])
          .length > 1;

      /**
       * If there are multiple filters with the same key we apply the OR operator of prestashop.
       * Otherwise we set the filter normally.
       * Example: [{ key: "id", value: 1 }, { key: "id", value: 2 }]
       * will become filter[id]=[1|2]
       **/
      if (hasMultipleFiltersWithTheSameKey && i > 0) {
        searchParams.set(
          key,
          `[${searchParams.get(key)?.replace(/\[|\]/g, '')}|${filter.value}]`
        );
      } else {
        searchParams.set(key, `[${filter.value}]`);
      }

      /**
       * If there are no multiple filters with the same key, we apply the operator.
       * Prestashop's webservices don't handle the combination of % and OR.
       **/
      if (!hasMultipleFiltersWithTheSameKey) {
        const initializedFilter = searchParams.get(key);

        switch (filter.operator) {
          case 'start':
            searchParams.set(key, `%${initializedFilter}`);
            break;

          case 'end':
            searchParams.set(key, `${initializedFilter}%`);
            break;

          case 'contains':
            searchParams.set(key, `%${initializedFilter}%`);
            break;

          default:
            break;
        }
      }
    });
  }

  if (params.sort) {
    searchParams.set('sort', `[${params.sort.toString()}]`);
  }

  return searchParams;
};

/**
 * Handle the listing of entities on prestashop with filtering and pagination.
 *
 * @param path
 * @param params
 * @returns
 */
export const getAllCall = async <T>(
  endpoint: Endpoint,
  params: GetAllParams
): Promise<PrestashopAPIResponse<T[]>> => {
  const response = await call<T[]>({
    method: 'GET',
    path: `/${endpoint}`,
    paramsSerializer: {
      serialize: (serializeParams) => {
        const searchParams = generateGetAllURLSearchParams(params);

        return `${qs.stringify(serializeParams)}&${searchParams.toString()}`;
      },
    },
  });

  if (isAxiosError(response)) {
    return {
      data: response.response?.data
        ? response.response?.data[endpoint]
        : undefined,
      errors: response.response?.data.errors,
    };
  }

  return {
    data: response.data ? response.data[endpoint] : undefined,
    errors: undefined,
  };
};

/**
 * Handle the fetch of a single entity on prestashop with params.
 *
 * @param path
 * @param id
 * @param params
 * @returns
 */
export const getCall = async <T>(
  endpoint: Endpoint,
  id: number,
  params: GetParams | undefined = undefined
): Promise<PrestashopAPIResponse<T>> => {
  const searchParams = generateURLSearchParams(params);

  const response = await call<T>({
    method: 'GET',
    path: `/${endpoint}/${id}`,
    paramsSerializer: {
      serialize: (params) =>
        `${qs.stringify(params)}&${searchParams.toString()}`,
    },
  });

  if (isAxiosError(response)) {
    return {
      data: response.response?.data
        ? response.response?.data[endpoint]
        : undefined,
      errors: response.response?.data.errors,
    };
  }

  return {
    data: response.data ? response.data[endpoint] : undefined,
    errors: undefined,
  };
};

/**
 * Handle the creation of an entity on prestashop.
 *
 * @param path
 * @param id
 * @param params
 * @returns
 */
export const postCall = async <T>(
  endpoint: Endpoint,
  body: Partial<T>,
  params: PostParams | undefined = undefined
): Promise<PrestashopAPIResponse<T>> => {
  const xml = create({ prestashop: { [endpoint]: body } }).end({
    prettyPrint: true,
  });

  const searchParams = generateURLSearchParams(params);

  const response = await call<T>({
    method: 'POST',
    path: `/${endpoint}`,
    body: xml,
    paramsSerializer: {
      serialize: (params) =>
        `${qs.stringify(params)}&${searchParams.toString()}`,
    },
  });

  if (isAxiosError(response)) {
    return {
      data: response.response?.data
        ? response.response?.data[endpoint]
        : undefined,
      errors: response.response?.data.errors,
    };
  }

  return {
    data: response.data ? response.data[endpoint] : undefined,
    errors: undefined,
  };
};

/**
 * Handle the update of an entity on prestashop.
 *
 * @param path
 * @param id
 * @param params
 * @returns
 */
export const putCall = async <T>(
  endpoint: Endpoint,
  id: number,
  body: Partial<T>,
  params: PutParams | undefined = undefined
): Promise<PrestashopAPIResponse<T>> => {
  const xml = create({ prestashop: { [endpoint]: body } }).end({
    prettyPrint: true,
  });

  const searchParams = generateURLSearchParams(params);

  const response = await call<T>({
    method: 'PUT',
    path: `/${endpoint}/${id}`,
    body: xml,
    paramsSerializer: {
      serialize: (params) =>
        `${qs.stringify(params)}&${searchParams.toString()}`,
    },
  });

  if (isAxiosError(response)) {
    return {
      data: response.response?.data
        ? response.response?.data[endpoint]
        : undefined,
      errors: response.response?.data.errors,
    };
  }

  return {
    data: response.data ? response.data[endpoint] : undefined,
    errors: undefined,
  };
};
