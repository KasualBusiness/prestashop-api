import { Endpoint } from '../enums/endpoint.enum';
import {
  GetAllParams,
  GetParams,
  PostParams,
  PutParams,
} from '../types/global.type';
import { getAllCall, getCall, postCall, putCall } from '../utils/calls';
import { PrestashopNodeAPIResponse } from '../types/calls.type';

class Common<T> {
  endpoint: Endpoint;
  params: GetAllParams | GetParams | undefined;

  constructor(endpoint: Endpoint) {
    this.endpoint = endpoint;
  }

  /**
   * List all items from endpoint.
   *
   * @param params
   * @returns
   */
  getAll = async (
    params: GetAllParams | undefined = { display: 'full' }
  ): Promise<PrestashopNodeAPIResponse<T[]>> => {
    const response = await getAllCall<T>(this.endpoint, params);

    return response;
  };

  /**
   * Get a single item from endpoint.
   *
   * @param id
   * @param params
   * @returns
   */
  get = async (
    id: number,
    params: GetParams | undefined = { display: 'full' }
  ): Promise<PrestashopNodeAPIResponse<T>> => {
    const response = await getCall<T>(this.endpoint, id, params);

    return response;
  };

  /**
   * Create an item from endpoint.
   *
   * @param body
   * @param params
   * @returns
   */
  create = async (
    body: Partial<T>,
    params: PostParams | undefined = { display: 'full' }
  ): Promise<PrestashopNodeAPIResponse<T>> => {
    const response = await postCall<T>(this.endpoint, body, params);

    return response;
  };

  /**
   * Update an item from endpoint.
   *
   * @param body
   * @param params
   * @returns
   */
  update = async (
    id: number,
    body: Partial<T>,
    params: PutParams | undefined = { display: 'full' }
  ): Promise<PrestashopNodeAPIResponse<T>> => {
    const response = await putCall<T>(this.endpoint, id, body, params);

    return response;
  };
}

export default Common;
