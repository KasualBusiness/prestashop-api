import { Config } from '../types/config.type';

export const config: Config = { url: '', key: '' };

/**
 * Initialize the library by giving the url and the api key
 * to the Prestashop's webservices.
 *
 * @param url
 * @param key
 */
export const init = (url: string, key: string) => {
  config.url = url;
  config.key = key;
};
