import { IsInt, Min } from 'class-validator';

export class CreateUserCourseDTO {
  @IsInt()
  @Min(0)
  user: number;

  @IsInt()
  @Min(0)
  course: number;

  @IsInt()
  @Min(0)
  inscriptionStatus: number;
}
