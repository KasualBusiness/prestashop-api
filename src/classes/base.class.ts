import { Endpoint } from '../enums/endpoint.enum';
import {
  ListParams,
  GetParams,
  PostParams,
  PutParams,
  DeleteParams,
} from '../types/global.type';
import {
  listCall,
  getCall,
  postCall,
  putCall,
  deleteCall,
  getSchemaCall,
} from '../utils/calls';
import {
  PrestashopAPIDeleteResponse,
  PrestashopAPIResponse,
} from '../types/calls.type';
import {
  handleBodyCreateUpdateAssociations,
  handleCreateUpdateMultiLanguagesFields,
} from '../utils/handlers';
import { KEYS_TO_DELETE_WHEN_UPDATING } from '../utils/consts';

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
    const bodyWithUpdatedAssociations =
      handleBodyCreateUpdateAssociations(body);
    const newBody = handleCreateUpdateMultiLanguagesFields(
      bodyWithUpdatedAssociations
    );

    const response = await postCall<Custom>(this.endpoint, newBody, params);

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
    params: PutParams<Custom> | undefined = { display: 'full' }
  ): Promise<PrestashopAPIResponse<Custom>> => {
    // Get the item to update
    const { data: itemToUpdate, errors } = await this.get<Custom>(id);
    // Get the blank schema in order to get the updatable keys
    const { data: schema } = await getSchemaCall<Custom>(this.endpoint);

    if (itemToUpdate && schema && typeof schema === 'object') {
      const keysToDelete = Object.keys(itemToUpdate).filter(
        (key) => !(key in schema)
      );

      // Pre-merge key deletation, some keys block the update of an item
      const listOfKeysToExclude = [
        ...keysToDelete,
        ...KEYS_TO_DELETE_WHEN_UPDATING,
      ];

      listOfKeysToExclude.forEach(
        (key) => delete itemToUpdate[key as keyof Custom]
      );

      const bodyMerged = { ...itemToUpdate, ...body };

      // Post-merge key deletation (not listed in KEYS_TO_DELETE_WHEN_UPDATING)
      (params.keysToExclude || []).forEach(
        (key) => delete bodyMerged[key as keyof Custom]
      );

      const bodyWithUpdatedAssociations =
        handleBodyCreateUpdateAssociations(bodyMerged);
      const newBody = handleCreateUpdateMultiLanguagesFields(
        bodyWithUpdatedAssociations
      );

      const response = await putCall<Custom>(
        this.endpoint,
        id,
        newBody,
        params
      );

      return response;
    }

    return { data: itemToUpdate, errors };
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
    params: DeleteParams | undefined = { display: 'full' }
  ): Promise<PrestashopAPIDeleteResponse> => {
    const response = await deleteCall(this.endpoint, id, params);

    return response;
  };
}
