import axios, { AxiosError, Method, ResponseType, isAxiosError } from 'axios';
import { create } from 'xmlbuilder2';
import qs from 'qs';
import {
  CustomFilter,
  CustomGetParams,
  CustomParams,
  DeleteParams,
  Filter,
  GetParams,
  ListParams,
  PostParams,
  PutParams,
  isCustomGetParams
} from '../types/global.type';
import { Endpoint } from '../enums/endpoint.enum';
import {
  CallParams,
  PrestashopAPIDeleteResponse,
  PrestashopAPIResponse,
  PrestashopErrorResponse
} from '../types/calls.type';
import { config } from '../config/index';

/**
 * Generate url SearchParams.
 *
 * @param params
 * @returns
 */
export const generateURLSearchParams = <T>(
  params: ListParams<T> | GetParams | PostParams | PutParams<T> | undefined
): URLSearchParams => {
  const searchParams = new URLSearchParams();

  /** Display */
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
export const generateListURLSearchParams = <T>(
  params: ListParams<T>
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
    params.filters.forEach((filter: Filter<T>, i: number) => {
      const key = `filter[${filter.key.toString()}]`;
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

  /** Sort */
  if (params.sort) {
    searchParams.set('sort', `[${params.sort.toString()}]`);
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
export const generateListCustomURLSearchParams = (
  params: CustomGetParams
): URLSearchParams => {
  const searchParams = generateURLSearchParams(params);

  /** Filters */
  if (params.filters) {
    params.filters.forEach((filter: CustomFilter, i: number) => {
      const key = `filter[${filter.key.toString()}]`;
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

  return searchParams;
};

/**
 * Directly call the prestashop webservices.
 *
 * @param param0
 * @returns
 */
export const call = async <T>({
  method,
  path,
  params,
  body,
  headers,
  paramsSerializer
}: CallParams) => {
  const { url, key } = config;

  const response = await axios<Record<Endpoint, T[]>>({
    method,
    url: `${url}/api${path}`,
    params: {
      ...params,
      ws_key: key,
      output_format: 'JSON'
    },
    paramsSerializer,
    data: body,
    headers
  }).catch((error: AxiosError<PrestashopErrorResponse<T[]>>) => {
    return error;
  });

  return response;
};

/**
 * Handle the listing of entities on prestashop with filtering and pagination.
 *
 * @param endpoint
 * @param params
 * @returns
 */
export const listCall = async <T>(
  endpoint: Endpoint,
  params: ListParams<T>
): Promise<PrestashopAPIResponse<T[]>> => {
  const response = await call<T>({
    method: 'GET',
    path: `/${endpoint}`,
    paramsSerializer: {
      serialize: (serializeParams) => {
        const searchParams = generateListURLSearchParams(params);

        return `${qs.stringify(serializeParams)}&${searchParams.toString()}`;
      }
    }
  });

  if (isAxiosError(response)) {
    return {
      data: response.response?.data
        ? response.response?.data[endpoint]
        : undefined,
      errors: response.response?.data.errors
    };
  }

  return {
    data: response.data ? response.data[endpoint] : undefined,
    errors: undefined
  };
};
/**
 * Handle the listing of entities on prestashop with filtering and pagination.
 *
 * @param endpoint
 * @param params
 * @returns
 */
export const findCall = async <T>(
  endpoint: Endpoint,
  params: GetParams
): Promise<PrestashopAPIResponse<T>> => {
  const response = await call<T>({
    method: 'GET',
    path: `/${endpoint}`,
    paramsSerializer: {
      serialize: (serializeParams) => {
        const searchParams = generateListURLSearchParams(params);

        return `${qs.stringify(serializeParams)}&${searchParams.toString()}`;
      }
    }
  });

  if (isAxiosError(response)) {
    return {
      data:
        response.response?.data &&
        response.response?.data[endpoint] &&
        response.response?.data[endpoint].length > 0
          ? response.response.data[endpoint][0]
          : undefined,
      errors: response.response?.data.errors
    };
  }

  return {
    data:
      response.data &&
      response.data[endpoint] &&
      response.data[endpoint].length > 0
        ? response.data[endpoint][0]
        : undefined,
    errors: undefined
  };
};

/**
 * Handle the fetch of a single entity on prestashop with params.
 *
 * @param endpoint
 * @param id
 * @param params
 * @returns
 */
export const getCall = async <T>(
  endpoint: Endpoint,
  id: number | string,
  params: GetParams | undefined = undefined
): Promise<PrestashopAPIResponse<T>> => {
  const searchParams = generateURLSearchParams(params);

  const response = await call<T>({
    method: 'GET',
    path: `/${endpoint}/${id}`,
    paramsSerializer: {
      serialize: (params) =>
        `${qs.stringify(params)}&${searchParams.toString()}`
    }
  });

  if (isAxiosError(response)) {
    return {
      data:
        response.response?.data &&
        response.response?.data[endpoint] &&
        response.response?.data[endpoint].length > 0
          ? response.response.data[endpoint][0]
          : undefined,
      errors: response.response?.data.errors
    };
  }

  return {
    data:
      response.data &&
      response.data[endpoint] &&
      response.data[endpoint].length > 0
        ? response.data[endpoint][0]
        : undefined,
    errors: undefined
  };
};

/**
 * Handle the fetch of a single entity on prestashop with params.
 *
 * @param endpoint
 * @returns
 */
export const getSchemaCall = async <T>(
  endpoint: Endpoint
): Promise<PrestashopAPIResponse<T>> => {
  const response = await call<T>({
    method: 'GET',
    path: `/${endpoint}`,
    params: { schema: 'blank', display: 'full' }
  });

  if (isAxiosError(response)) {
    return {
      data:
        response.response?.data &&
        response.response?.data[endpoint] &&
        response.response?.data[endpoint].length > 0
          ? response.response.data[endpoint][0]
          : undefined,
      errors: response.response?.data.errors
    };
  }

  return {
    data:
      response.data &&
      response.data[endpoint] &&
      response.data[endpoint].length > 0
        ? response.data[endpoint][0]
        : undefined,
    errors: undefined
  };
};

/**
 * Handle the creation of an entity on prestashop.
 *
 * @param endpoint
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
    prettyPrint: true
  });

  const searchParams = generateURLSearchParams(params);

  const response = await call<T>({
    method: 'POST',
    path: `/${endpoint}`,
    body: xml,
    paramsSerializer: {
      serialize: (params) =>
        `${qs.stringify(params)}&${searchParams.toString()}`
    }
  });

  if (isAxiosError(response)) {
    return {
      data:
        response.response?.data &&
        response.response?.data[endpoint] &&
        response.response?.data[endpoint].length > 0
          ? response.response?.data[endpoint][0]
          : undefined,
      errors: response.response?.data.errors
    };
  }

  return {
    data:
      response.data &&
      response.data[endpoint] &&
      response.data[endpoint].length > 0
        ? response.data[endpoint][0]
        : undefined,
    errors: undefined
  };
};

/**
 * Handle the deletion of an entity on prestashop.
 *
 * @param endpoint
 * @param id
 * @param params
 * @returns
 */
export const deleteCall = async (
  endpoint: Endpoint,
  id: number | string,
  params: DeleteParams | undefined = undefined
): Promise<PrestashopAPIDeleteResponse> => {
  const searchParams = generateURLSearchParams(params);

  const response = await call({
    method: 'DELETE',
    path: `/${endpoint}/${id}`,
    paramsSerializer: {
      serialize: (params) =>
        `${qs.stringify(params)}&${searchParams.toString()}`
    }
  });

  if (isAxiosError(response)) {
    return {
      success: false,
      errors: response.response?.data.errors
    };
  }

  return {
    success: true,
    errors: undefined
  };
};

/**
 * Handle the update of an entity on prestashop.
 *
 * @param endpoint
 * @param id
 * @param params
 * @returns
 */
export const putCall = async <T>(
  endpoint: Endpoint,
  id: number | string,
  body: Partial<T>,
  params: PutParams<T> | undefined = undefined
): Promise<PrestashopAPIResponse<T>> => {
  const xml = create({ prestashop: { [endpoint]: body } }).end({
    prettyPrint: true
  });

  const searchParams = generateURLSearchParams(params);

  const response = await call<T>({
    method: 'PUT',
    path: `/${endpoint}/${id}`,
    body: xml,
    paramsSerializer: {
      serialize: (params) =>
        `${qs.stringify(params)}&${searchParams.toString()}`
    }
  });

  if (isAxiosError(response)) {
    return {
      data:
        response.response?.data &&
        response.response?.data[endpoint] &&
        response.response?.data[endpoint].length > 0
          ? response.response?.data[endpoint][0]
          : undefined,
      errors: response.response?.data.errors
    };
  }

  return {
    data:
      response.data &&
      response.data[endpoint] &&
      response.data[endpoint].length > 0
        ? response.data[endpoint][0]
        : undefined,
    errors: undefined
  };
};

/** Custom calls */

/**
 * Function used by the custom class. It workds like the classic
 * custom call but we adapt the returned type since we don't know
 * it.
 *
 * @param param0
 * @returns
 */
const customCallAction = async <T>({
  method,
  path,
  params,
  body,
  paramsSerializer,
  responseType
}: CallParams) => {
  const { url, key } = config;

  const response = await axios<T>({
    method,
    url: `${url}/api${path}`,
    params: {
      ...params,
      ws_key: key,
      output_format: 'JSON'
    },
    paramsSerializer,
    data: body,
    responseType
  }).catch((error: AxiosError<T>) => {
    return error;
  });

  return response;
};

/**
 * Custom call on endpoint
 *
 * @param endpoint
 * @param params
 * @returns
 */
export const customCall = async <Response, Body = unknown>({
  method,
  path,
  body,
  params,
  responseType
}: {
  method: Method;
  path: string;
  params?: CustomParams | CustomGetParams;
  body?: Body | FormData;
  responseType?: ResponseType;
}): Promise<Response | undefined> => {
  let newBody: Body | FormData | string | undefined = body;

  let isInstanceOfFormData = false;

  // If run in browser
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    isInstanceOfFormData = body instanceof FormData;
  } else {
    const { default: FormData } = await import('form-data');
    isInstanceOfFormData = body instanceof FormData;
  }

  // Transform to xml if json param is false and is not form data
  if (!isInstanceOfFormData && !isCustomGetParams(params) && !params?.json) {
    newBody = body
      ? create({ prestashop: body }).end({
          prettyPrint: true
        })
      : undefined;
  }

  const response = await customCallAction<Response>({
    method,
    path,
    body: newBody,
    paramsSerializer: {
      serialize: (serializeParams) => {
        const searchParams =
          params && isCustomGetParams(params)
            ? generateListCustomURLSearchParams(params)
            : generateURLSearchParams(params);

        // Merge custom query params with search params.
        if (params && isCustomGetParams(params) && params.customSearchParams) {
          for (const [key, value] of params.customSearchParams.entries()) {
            searchParams.append(key, value);
          }
        }

        return `${qs.stringify(serializeParams)}&${searchParams.toString()}`;
      }
    },
    responseType
  });

  if (isAxiosError(response)) {
    return response.response?.data;
  }

  return response.data;
};
