export interface ApiResponse<T> {
  status: boolean;
  timestamp: string;
  message: string;
  data: T[];
}
