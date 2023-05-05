export type Filter<T> = {
  key: keyof T;
  value: string | number;
  operator?: 'start' | 'end' | 'contains' | 'strict';
};

export type ListParams<T> = {
  display?: string[] | 'full';
  limit?: number;
  skip?: number;
  filters?: Filter<T>[];
  sort?: (`${string}_ASC` | `${string}_DESC`)[];
};

export type GetParams = {
  display?: string[] | 'full';
};

export type PostParams = {
  display?: string[] | 'full';
};

export type PutParams = {
  display?: string[] | 'full';
};

export type DeleteParams = {
  display?: string[] | 'full';
};

export type CustomParams = {
  display?: string[] | 'full';
};

export type CustomGetParams = {
  display?: string[] | 'full';
} & {
  customSearchParams?: URLSearchParams;
};

/** User defined type guards */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isCustomGetParams = (value: any): value is CustomGetParams => {
  return value.customSearchParams !== undefined;
};
