import { StockMovement } from '../types/prestashop.type';
import { Endpoint } from '../enums/endpoint.enum';
import {
  DeleteParams,
  GetParams,
  ListParams,
  PostParams,
  PutParams,
} from '../types/global.type';
import {
  PrestashopAPIResponse,
  StockMovementsResponse,
} from '../types/calls.type';
import { customCall } from '../utils/calls';

export class StockMovements {
  endpoint = Endpoint.stockMvt;

  /**
   * List all stock movements from endpoint.
   *
   * @param params
   * @returns
   */
  list = async (
    params: ListParams<StockMovement> | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<StockMovement[]>> => {
    const response = await customCall<Partial<StockMovementsResponse>>({
      method: 'GET',
      path: '/stock_mvt',
      params,
    });

    return {
      data: response?.stock_movements || [],
      errors: response?.errors,
    };
  };

  /**
   * Get a single stock movement by id.
   *
   * @param id
   * @param params
   * @returns
   */
  get = async (
    id: number,
    params: GetParams | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<StockMovement>> => {
    const response = await customCall<StockMovementsResponse>({
      method: 'GET',
      path: `/stock_mvt/${id}`,
      params,
    });

    if (response?.stock_movements && response?.stock_movements.length > 0) {
      return {
        data: response?.stock_movements[0] || [],
        errors: response?.errors,
      };
    }

    return {
      data: undefined,
      errors: response?.errors,
    };
  };

  /**
   * Create a stock movement.
   *
   * @param body
   * @param params
   * @returns
   */
  create = async (
    body: Partial<StockMovement>,
    params: PostParams | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<StockMovement>> => {
    const response = await customCall<StockMovementsResponse>({
      method: 'POST',
      path: '/stock_mvt',
      body: { stock_mvt: body },
      params,
    });

    if (response?.stock_movements && response?.stock_movements.length > 0) {
      return {
        data: response?.stock_movements[0] || [],
        errors: response?.errors,
      };
    }

    return {
      data: undefined,
      errors: response?.errors,
    };
  };

  /**
   * Update a stock movement by id.
   *
   * @param id
   * @param body
   * @param params
   * @returns
   */
  update = async (
    id: number,
    body: Partial<StockMovement>,
    params: PutParams | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<StockMovement>> => {
    const response = await customCall<StockMovementsResponse>({
      method: 'PUT',
      path: `/stock_mvt/${id}`,
      body: { stock_mvt: body },
      params,
    });

    if (response?.stock_movements && response?.stock_movements.length > 0) {
      return {
        data: response?.stock_movements[0] || [],
        errors: response?.errors,
      };
    }

    return {
      data: undefined,
      errors: response?.errors,
    };
  };

  /**
   * Delete a stock movement by id.
   *
   * @param id
   * @param params
   * @returns
   */
  delete = async (
    id: number,
    params: DeleteParams | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<StockMovement>> => {
    const response = await customCall<StockMovementsResponse>({
      method: 'DELETE',
      path: `/stock_mvt/${id}`,
      params,
    });

    if (response?.stock_movements && response?.stock_movements.length > 0) {
      return {
        data: response?.stock_movements[0] || [],
        errors: response?.errors,
      };
    }

    return {
      data: undefined,
      errors: response?.errors,
    };
  };
}
