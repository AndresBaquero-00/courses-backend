export interface ReadRepository<T> {
  findAll(page?: number, size?: number): Promise<T[]>;
}
