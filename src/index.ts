import axios, { AxiosError } from 'axios';
import * as endpoints from './endpoints';
import { CallParams, PrestashopErrorResponse } from './types/calls.type';
import { Config } from './types/config.type';
import { Endpoint } from './enums/endpoint.enum';

const config: Config = { url: '', key: '' };

/**
 * Init the library by giving the url and the api key to the Prestashop's webservices.
 *
 * @param url
 * @param key
 */
export const init = (url: string, key: string) => {
  config.url = url;
  config.key = key;
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
  paramsSerializer,
}: CallParams) => {
  const { url, key } = config;

  const response = await axios<Record<Endpoint, T>>({
    method,
    url: `${url}/api${path}`,
    params: {
      ...params,
      ws_key: key,
      output_format: 'JSON',
    },
    paramsSerializer,
    data: body,
    headers,
  }).catch((error: AxiosError<PrestashopErrorResponse<T>>) => {
    return error;
  });

  return response;
};

/** Export prestashop's type */
export * from './types/prestashop.type';

/** Export prestashop-api types */
export * from './types/global.type';

/** Export endpoints */
export * from './endpoints';

/** Export endpoints as default */
export default endpoints;
