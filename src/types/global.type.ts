export type Filter = {
  key: string;
  value: string | number;
  operator?: 'start' | 'end' | 'contains' | 'strict';
};

export type GetAllParams = {
  display?: string[] | 'full';
  limit?: number;
  skip?: number;
  filters?: Filter[];
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
