import {
  PrestashopAPIResponse,
  SearchParams,
  SearchResponse
} from '../types/calls.type';
import { customCall } from '../utils/calls';

export class Search {
  /**
   * Search function.
   *
   * @param params
   * @returns
   */
  find = async (
    params: SearchParams | undefined = {
      value: '',
      languageId: -1
    }
  ): Promise<PrestashopAPIResponse<SearchResponse>> => {
    const searchParams = new URLSearchParams();

    searchParams.append('query', params.value);
    searchParams.append('language', params.languageId.toString());

    const response = await customCall<Partial<SearchResponse>>({
      method: 'GET',
      path: '/search',
      params: {
        customSearchParams: searchParams
      }
    });

    return {
      data: {
        products: response?.products || [],
        categories: response?.categories || []
      },
      errors: response?.errors
    };
  };
}
