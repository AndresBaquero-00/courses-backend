import { IsInt, IsOptional } from 'class-validator';

export class QueryListCoursesDTO {
  @IsInt()
  @IsOptional()
  page?: number;

  @IsInt()
  @IsOptional()
  size?: number;
}
