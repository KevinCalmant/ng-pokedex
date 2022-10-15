export interface PokeApiResponse<T extends unknown> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
