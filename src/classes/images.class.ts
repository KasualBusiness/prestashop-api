import fs from 'fs';
import FormData from 'form-data';
import { AxiosResponse } from 'axios';
import { call, customCall } from '../utils/calls';
import { ImageTypeRoute } from '../types/prestashop.type';

export class Images {
  /**
   *  /**
   * Create an image.
   * It needs the category of the image, the item id and
   * the path to the file.
   *
   * @param type
   * @param itemId
   * @param path
   * @returns
   */
  create = async (
    type: ImageTypeRoute,
    itemId: number,
    path: string
  ): Promise<AxiosResponse> => {
    const formData = new FormData();

    const file = fs.readFileSync(path);

    formData.append('image', file, {
      filepath: path,
    });

    const response: AxiosResponse = await call({
      method: 'POST',
      path: `/images/${type}/${itemId}`,
      body: formData,
      headers: formData.getHeaders(),
    }).catch((error) => {
      return error.response;
    });

    return response;
  };

  /**
   * Get an image.
   * It needs the category of the image, the item id and
   * the image id.
   *
   * @param type
   * @param itemId
   * @param imageId
   * @returns
   */
  get = async (
    type: ImageTypeRoute,
    itemId: number,
    imageId: number
  ): Promise<ArrayBuffer | undefined> => {
    const response = await customCall<ArrayBuffer>({
      method: 'GET',
      path: `/images/${type}/${itemId}/${imageId}`,
      responseType: 'arraybuffer',
    });

    return response;
  };
}
