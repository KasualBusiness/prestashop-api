import { Endpoint } from '../enums/endpoint.enum';
import {
  ListParams,
  GetParams,
  PostParams,
  PutParams,
} from '../types/global.type';
import {
  listCall,
  getCall,
  postCall,
  putCall,
  deleteCall,
} from '../utils/calls';
import {
  PrestashopAPIDeleteResponse,
  PrestashopAPIResponse,
} from '../types/calls.type';

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
  list = async <Custom extends T>(
    params: ListParams<Custom> | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<Custom[]>> => {
    const response = await listCall<Custom>(this.endpoint, params);

    return response;
  };

  /**
   * Get a single item from endpoint.
   *
   * @param id
   * @param params
   * @returns
   */
  get = async <Custom extends T>(
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
  create = async <Custom extends T>(
    body: Partial<Custom>,
    params: PostParams | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<Custom>> => {
    // If associations is present, we have to add a key to be accepted by the prestashop api.
    const { associations } = body as unknown as {
      associations: Record<string, Record<string, unknown>[]> | undefined;
    };

    if (associations) {
      body = {
        ...body,
        associations: Object.fromEntries(
          Object.entries(associations).map(([key, value]) => {
            let newKey = key.slice(0, -1);

            if (key === 'categories') {
              newKey = 'category';
            }

            if (key === 'addresses') {
              newKey = 'address';
            }

            if (key === 'taxes') {
              newKey = 'tax';
            }

            if (key === 'product_option_value') {
              newKey = 'product_option_value';
            }

            if (key === 'accessories') {
              newKey = 'accessory';
            }

            if (key === 'product_bundle') {
              newKey = 'product_bundle';
            }

            return [key, { [newKey]: value }];
          })
        ),
      };
    }

    const response = await postCall<Custom>(this.endpoint, body, params);

    return response;
  };

  /**
   * Update an item from endpoint.
   *
   * @param id
   * @param body
   * @param params
   * @returns
   */
  update = async <Custom extends T>(
    id: number,
    body: Partial<Custom>,
    params: PutParams | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<Custom>> => {
    const response = await putCall<Custom>(this.endpoint, id, body, params);

    return response;
  };

  /**
   * Delete an item from endpoint.
   *
   * @param id
   * @param params
   * @returns
   */
  delete = async (
    id: number,
    params: PutParams | undefined = { display: 'full' }
  ): Promise<PrestashopAPIDeleteResponse> => {
    const response = await deleteCall(this.endpoint, id, params);

    return response;
  };
}
