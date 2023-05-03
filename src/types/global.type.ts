export type Filter<T> = {
  key: keyof T;
  value: string | number;
  operator?: 'start' | 'end' | 'contains' | 'strict';
};

export type GetAllParams<T> = {
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

export type CustomParams = {
  display?: string[] | 'full';
};
