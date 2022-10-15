export interface PokeApiResponse<T extends Object> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
