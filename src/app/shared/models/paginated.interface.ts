export interface PaginatedApiResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: boolean
  };
  results: T[];
}
