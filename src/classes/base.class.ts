import { Endpoint } from '../enums/endpoint.enum';
import {
  GetAllParams,
  GetParams,
  PostParams,
  PutParams,
} from '../types/global.type';
import { getAllCall, getCall, postCall, putCall } from '../utils/calls';
import { PrestashopAPIResponse } from '../types/calls.type';

export class Base<T> {
  endpoint: Endpoint;

  constructor(endpoint: Endpoint) {
    this.endpoint = endpoint;
  }

  /**
   * List all items from endpoint.
   *
   * @param params
   * @returns
   */
  getAll = async <Custom = T>(
    params: GetAllParams<Custom> | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<Custom[]>> => {
    const response = await getAllCall<Custom>(this.endpoint, params);

    return response;
  };

  /**
   * Get a single item from endpoint.
   *
   * @param id
   * @param params
   * @returns
   */
  get = async <Custom = T>(
    id: number,
    params: GetParams | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<Custom>> => {
    const response = await getCall<Custom>(this.endpoint, id, params);

    return response;
  };

  /**
   * Create an item from endpoint.
   *
   * @param body
   * @param params
   * @returns
   */
  create = async <Custom = T>(
    body: Partial<Custom>,
    params: PostParams | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<Custom>> => {
    const response = await postCall<Custom>(this.endpoint, body, params);

    return response;
  };

  /**
   * Update an item from endpoint.
   *
   * @param body
   * @param params
   * @returns
   */
  update = async <Custom = T>(
    id: number,
    body: Partial<Custom>,
    params: PutParams | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<Custom>> => {
    const response = await putCall<Custom>(this.endpoint, id, body, params);

    return response;
  };
}
