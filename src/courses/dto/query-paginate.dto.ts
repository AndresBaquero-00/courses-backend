import { IsInt, IsOptional } from 'class-validator';

export class QueryPaginateDTO {
  @IsInt()
  @IsOptional()
  page?: number;

  @IsInt()
  @IsOptional()
  size?: number;
}
