import { Stock } from '../types/prestashop.type';
import {
  DeleteParams,
  GetParams,
  ListParams,
  PostParams,
  PutParams
} from '../types/global.type';
import { PrestashopAPIResponse, StocksResponse } from '../types/calls.type';
import { customCall } from '../utils/calls';

export class Stocks {
  /**
   * List all stocks from endpoint.
   *
   * @param params
   * @returns
   */
  list = async (
    params: ListParams<Stock> | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<Stock[]>> => {
    const response = await customCall<Partial<StocksResponse>>({
      method: 'GET',
      path: '/stock',
      params
    });

    return {
      data: response?.stocks || [],
      errors: response?.errors
    };
  };

  /**
   * Returns first stock from endpoint.
   *
   * @param params
   * @returns
   */
  find = async (
    params: ListParams<Stock> | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<Stock>> => {
    const response = await customCall<Partial<StocksResponse>>({
      method: 'GET',
      path: '/stock',
      params
    });

    if (response?.stocks && response.stocks.length > 0) {
      return {
        data: response.stocks[0],
        errors: response.errors
      };
    }

    return {
      data: undefined,
      errors: response?.errors
    };
  };

  /**
   * Get a single stock by id.
   *
   * @param id
   * @param params
   * @returns
   */
  get = async (
    id: number | string,
    params: GetParams | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<Stock>> => {
    const response = await customCall<StocksResponse>({
      method: 'GET',
      path: `/stock/${id}`,
      params
    });

    if (response?.stocks && response?.stocks.length > 0) {
      return {
        data: response?.stocks[0] || [],
        errors: response?.errors
      };
    }

    return {
      data: undefined,
      errors: response?.errors
    };
  };

  /**
   * Create a stock.
   *
   * @param body
   * @param params
   * @returns
   */
  create = async (
    body: Partial<Stock>,
    params: PostParams | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<Stock>> => {
    const response = await customCall<StocksResponse>({
      method: 'POST',
      path: '/stock',
      body: { stock: body },
      params
    });

    if (response?.stocks && response?.stocks.length > 0) {
      return {
        data: response?.stocks[0] || [],
        errors: response?.errors
      };
    }

    return {
      data: undefined,
      errors: response?.errors
    };
  };

  /**
   * Update a stock by id.
   *
   * @param id
   * @param body
   * @param params
   * @returns
   */
  update = async (
    id: number | string,
    body: Partial<Stock>,
    params: PutParams<Stock> | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<Stock>> => {
    const response = await customCall<StocksResponse>({
      method: 'PUT',
      path: `/stock/${id}`,
      body: { stock: body },
      params
    });

    if (response?.stocks && response?.stocks.length > 0) {
      return {
        data: response?.stocks[0] || [],
        errors: response?.errors
      };
    }

    return {
      data: undefined,
      errors: response?.errors
    };
  };

  /**
   * Delete a stock by id.
   *
   * @param id
   * @param params
   * @returns
   */
  delete = async (
    id: number | string,
    params: DeleteParams | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<Stock>> => {
    const response = await customCall<StocksResponse>({
      method: 'DELETE',
      path: `/stock/${id}`,
      params
    });

    if (response?.stocks && response?.stocks.length > 0) {
      return {
        data: response?.stocks[0] || [],
        errors: response?.errors
      };
    }

    return {
      data: undefined,
      errors: response?.errors
    };
  };
}
