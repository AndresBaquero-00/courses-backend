import { IsEmail, IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty({ message: 'El nombre del usuario es obligatorio.' })
  firstName: string;

  @IsString()
  @IsNotEmpty({ message: 'El apellido del usuario es obligatorio.' })
  lastName: string;

  @IsEmail()
  @IsNotEmpty({ message: 'El correo del usuario es obligatorio.' })
  email: string;

  @IsInt()
  @Min(0)
  phone: number;

  @IsInt()
  @Min(0)
  role: number;
}
