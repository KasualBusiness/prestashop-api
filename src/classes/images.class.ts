import fs from 'fs';
import FormData from 'form-data';
import { AxiosResponse } from 'axios';
import { call } from '../utils/calls';

export class Images {
  /**
   * Create an image.
   * It needs the product id and the path of the file.
   *
   * @param productId
   * @param formData
   */
  create = async (productId: number, path: string): Promise<AxiosResponse> => {
    const formData = new FormData();

    const file = fs.readFileSync(path);

    formData.append('image', file, {
      filepath: path,
    });

    const response: AxiosResponse = await call({
      method: 'POST',
      path: `/images/products/${productId}`,
      body: formData,
      headers: formData.getHeaders(),
    }).catch((error) => {
      return error.response;
    });

    return response;
  };
}
