import { CustomGetParams, CustomParams } from '../types/global.type';
import { customCall } from '../utils/calls';

export class Custom<Response> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  /**
   * List all items from custom endpoint.
   *
   * @param params
   * @returns
   */
  list = async (
    params: CustomGetParams | undefined = { display: 'full' }
  ): Promise<Response | undefined> => {
    const response = await customCall<Response>({
      method: 'GET',
      path: `/${this.endpoint}`,
      params,
    });

    return response;
  };

  /**
   * Get a single item from a custom endpoint.
   *
   * @param id
   * @param params
   * @returns
   */
  get = async (
    id: number | null | undefined,
    params: CustomGetParams | undefined = { display: 'full' }
  ): Promise<Response | undefined> => {
    const response = await customCall<Response>({
      method: 'GET',
      path: `/${this.endpoint}${id ? `/${id}` : ''}`,
      params,
    });

    return response;
  };

  /**
   * Create an item from a custom endpoint.
   *
   * @param body
   * @param params
   * @returns
   */
  create = async <Body>(
    body: Body | FormData,
    params: CustomParams | undefined = { display: 'full' }
  ): Promise<Response | undefined> => {
    const response = await customCall<Response>({
      method: 'POST',
      path: `/${this.endpoint}`,
      body,
      params,
    });

    return response;
  };

  /**
   * Update an item from a custom endpoint.
   *
   * @param body
   * @param params
   * @returns
   */
  update = async <Body>(
    id: number,
    body: Body | FormData,
    params: CustomParams | undefined = { display: 'full' }
  ): Promise<Response | undefined> => {
    const response = await customCall<Response, Body>({
      method: 'PUT',
      path: `/${this.endpoint}/${id}`,
      body,
      params,
    });

    return response;
  };

  /**
   * Update an item from a custom endpoint.
   *
   * @param body
   * @param params
   * @returns
   */
  delete = async (
    id: number,
    params: CustomParams | undefined = { display: 'full' }
  ): Promise<Response | undefined> => {
    const response = await customCall<Response, Body>({
      method: 'DELETE',
      path: `/${this.endpoint}/${id}`,
      params,
    });

    return response;
  };
}
