export interface PaginationResponse<T> {
  pageSize: number;
  pageNumber: number;
  count: number;
  items: T[];
}
