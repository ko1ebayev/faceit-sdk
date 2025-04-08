export type PaginatedResponse<T> = {
  end: number;
  start: number;
  from?: number;
  to?: number;
  items: Array<T>;
};
