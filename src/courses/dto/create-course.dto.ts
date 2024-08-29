import { IsInt, IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateCourseDTO {
  @IsString()
  @IsNotEmpty({ message: 'El nombre del curso es obligatorio.' })
  name: string;

  @IsInt()
  @Min(0)
  category: number;

  @IsInt()
  @Min(0)
  modality: number;

  @IsInt()
  @Min(0)
  duration: number;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  couta: number;
}
